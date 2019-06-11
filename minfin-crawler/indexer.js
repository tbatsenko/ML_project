const args = require('yargs').argv;
const axios = require('axios');
const cheerio = require('cheerio');
const URL = require('url').URL;
const fs = require('fs');
const to = require('await-to-js').to;
args.startPage = +args.startPage;
args.finishPage = +args.finishPage;

const output = {
  data: {},
  pages: {},
};

const baseUrl = 'https://minfin.com.ua/';

const main = async () => {
  for (let i = args.startPage; i <= args.finishPage; i += 1) {
    fs.writeFile(`./output/tempIndexerOutput-${new Date().getTime()}.json`, JSON.stringify(output));
    console.log(`Scrapping page ${i}, ${new Date()}`);
    await axios.get(`https://minfin.com.ua/ua/company/aval/news/${i}/`)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const page = `${i}`;

        output.pages[page] = [];

        const headingLinks = $('.mfz-post-title');
        headingLinks.each(function () {
          const link = new URL($(this).find('a').attr('href'), baseUrl).href;
          const title = $(this).find('a').text();

          output.data[link] = {
            title,
            link,
            page,
          };
          output.pages[page].push(link);
        });
      })
      .catch(console.error)
  }

  fs.writeFile(`./output/indexerOutput-${new Date().getTime()}.json`, JSON.stringify(output))
};

main();
