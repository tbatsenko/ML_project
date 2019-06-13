# ML_project

## Data analysis

### How to run
1. Copy `Models` folder to `data-analysis` folder
2. Copy 'data' folder to `data-analysis` - move all files to `data-analysis`, no need for separate folder.

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
