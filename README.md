[![travis build of twitterApiWrapper](https://travis-ci.org/vogelino/twitterApiWrapper.svg)](https://travis-ci.org/vogelino/twitterApiWrapper) ![david dependencies check of twitterApiWrapper](https://david-dm.org/vogelino/twitterApiWrapper.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![commitizen friendly](https://camo.githubusercontent.com/6080f52144977b8b2b20e42408379ce68371aafd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6d6d6974697a656e2d667269656e646c792d627269676874677265656e2e737667)](http://commitizen.github.io/cz-cli/) [![npm version](https://badge.fury.io/js/twitterApiWrapper.svg)](https://badge.fury.io/js/twitterApiWrapper)

# twitterApiWrapper
A wrapper for the twitter [REST](https://dev.twitter.com/rest/public) and [Streaming](https://dev.twitter.com/streaming/overview) APIs for simplifying the calls and provide extended log outputs.

Using twitter can be quite difficult as you always need to look into [the documentation](https://dev.twitter.com/overview/documentation) in order to know how to perform queries.
In comparison to the [twitter module](https://www.npmjs.com/package/twitter) it relays on, the twitterApiWrapper **does not require to know the query parameter's structure**. The provided methods are easy to understand and simplify things a lot. Even if this wrapper may suit many users that want to perform simple queries, using the twitter API directly remains the **recommended way to proceed**. Using the query parameters of the Twitter API gives you full power on what should be retrieved, so, think about it before using this module. Have fun!

## Installation

```shell
$ npm install --save twitterApiWrapper
```

## Usage
```javascript
var twitterApiWrapper = require('twitterApiWrapper');
var StreamApi = twitterApiWrapper.StreamApi;
var RestApi = twitterApiWrapper.RestApi;
// OR
import { StreamApi, RestApi } from 'twitterApiWrapper';

// Then
var twitterConfig = {
	'consumer_key': CHANGE_ME,
	'consumer_secret': CHANGE_ME,
	'access_token_key': CHANGE_ME,
	'access_token_secret': CHANGE_ME
};
var myStreamApi = new StreamApi(twitterConfig);
var myRestApi = new RestApi(twitterConfig);

// REST Api
myRestApi.getUserTimeline('BarackObama')
	.then((tweets) => { /*...*/ })
	.catch((err) => { /*...*/ });

// Streaming Api
myStreamApi.streamStatusesByKeyword(
	'#obama,#madonna',
	(tweet) => { /*...*/ },
	(err) => { /*...*/ }
);
```

## API

### REST API

##### `getUserTimeline(username:String):Promise `
Retrieves the tweets of the given user's timeline

### Streaming API

##### `streamStatusesByKeyword(keyword(s):String, onData:function, onError:function):stream `
Retrieves the tweets of the given user's timeline

#### That's all?!
Yes, for now. The idea is to provide step by step well tested methods that are intuitive to use. Please feel free to contribute!

## License
- [WTFPL](https://github.com/vogelino/twitterApiWrapper/blob/master/LICENSE) - [WTFPL website](http://www.wtfpl.net/)
