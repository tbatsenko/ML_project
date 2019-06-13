# ML_project

## What this project is about?
We took Raiffeisen Bank Aval(BAVL) stock price data, scrapped relevant news from https://minfin.com.ua/ website and predicted the future stock price based on NER enteties and sentiment analysis of the news.

## Data analysis

### How to run
1. Copy `Models` folder to `data-analysis` folder. https://drive.google.com/open?id=1xu6-ogcGH6oCf-0dfsamE2OZbMN8gnzz 
2. Copy `data` folder to `data-analysis` - move all files to `data-analysis`, no need for separate folder. https://drive.google.com/drive/folders/1I5hXt0A2oWMrJxG6bDBbv67wvvT9SqGe?usp=sharing

## Data scrapping

### How to run

indexer.js - `node indexer.js --orgCode aval --startPage 1 --finishPage 35`

scrapper.js - `node scrapper.js --indexFile ./output/indexerOutput-1560263121013.json` or `node scrapper.js --indexFile ./output/indexerOutput-1560263121013.json --outputFolder ./output/[folder name]` if output folder already exists

### Indexer output
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

### Scrapper output

Folder with 4 folders
- texts
- titles
- titles-and-texts
- done (no important data. used only as a helper)

File names are dates when they were published in ISO format `[date].txt`
