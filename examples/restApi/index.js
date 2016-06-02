const { restApi } = require('../../src/api');
const { readFileSync } = require('fs');
const { join } = require('path');

const configPath = join(__dirname, '../../.twitterrc');
const twitterConfig = JSON.parse(readFileSync(configPath));

restApi.init(twitterConfig);
restApi.getUserTimeline('soyvogelino');
