# minfin-crawler

## How to run

indexer.js - `node indexer.js --orgCode aval --startPage 1 --finishPage 35`

scrapper.js - `node scrapper.js --indexFile ./output/indexerOutput-1560263121013.json` or `node scrapper.js --indexFile ./output/indexerOutput-1560263121013.json --outputFolder ./output/[folder name]` if output folder already exists

## Indexer output
```json
{
  "data": {
    "[link]": {
      "title": "",
      "link": "",
      "page": "1"
    }
  },
  "pages": {
    "1": ["link", "link"]
  }
}
```

## Scrapper output

Folder with files where the name is a `[date]/[id].txt`
The file content is the content of the article
