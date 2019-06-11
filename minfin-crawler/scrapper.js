const args = require('yargs').argv;
const axios = require('axios');
const cheerio = require('cheerio');
const URL = require('url').URL;
const fs = require('fs');
const to = require('await-to-js').to;
const moment = require('moment');

const rawdata = fs.readFileSync(args.indexFile);
const indexedData = JSON.parse(rawdata);
let outputFolder = args.outputFolder;

if (!outputFolder) {
  outputFolder = `output/scrapped-data-${new Date().getTime()}`;
  fs.mkdirSync(outputFolder);
  fs.mkdirSync(`${outputFolder}/titles`);
  fs.mkdirSync(`${outputFolder}/texts`);
  fs.mkdirSync(`${outputFolder}/titles-and-texts`);
  fs.mkdirSync(`${outputFolder}/done`);
}

const allLinks = Object.keys(indexedData.data);

const main = async () => {
  for (let i = 0; i < allLinks.length; i += 1) {
    const link = indexedData.data[allLinks[i]];
    console.log(`Scrapping page ${i}, ${allLinks[i]}, ${new Date()}`);

    try {
      const stats = fs.statSync(`${outputFolder}/done/${allLinks[i].split('/').join('')}.txt`);
      console.log('IT EXISTS');
    }
    catch(err) {
      await axios.get(allLinks[i])
        .then(response => {
          const html = response.data;
          const $ = cheerio.load(html);

          const dateTime = moment($('div[itemprop="datePublished"]').attr('content')).format();
          let text = '';
          const title = indexedData.data[allLinks[i]].title;
          const articleParts = $('.progressive-news-text');
          articleParts.each(function () {
            text += $(this).text();
          });

          fs.writeFileSync(`${outputFolder}/titles/${dateTime}.txt`, title);
          fs.writeFileSync(`${outputFolder}/texts/${dateTime}.txt`, text);
          fs.writeFileSync(`${outputFolder}/titles-and-texts/${dateTime}.txt`, `${title}\n${text}`);
          fs.writeFileSync(`${outputFolder}/done/${allLinks[i].split('/').join('')}.txt`, '')
        })
        .catch(console.error)
    }
  }
};

main();
