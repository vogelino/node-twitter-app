const Twitter = require('twitter');
const { readFileSync } = require('fs');
const { join } = require('path');

const configPath = join(__dirname, '../.twitterrc');
const twitterConfig = JSON.parse(readFileSync(configPath));

module.exports = new Twitter(twitterConfig);
