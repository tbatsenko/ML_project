const args = require('yargs').argv;
const axios = require('axios');
const cheerio = require('cheerio');
const URL = require('url').URL;
const fs = require('fs');
const to = require('await-to-js').to;


// TODO: get params from arg - file
// TODO create dir if didn't get it from params


// TODO: go over every item in file
// TODO: if it doesn't exist, load it, parse and save