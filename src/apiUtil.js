const Twitter = require('twitter');
const { logError, logSuccess } = require('./logger');

const my = {};

my.checkForConfig = (config) => {
	if (!config) {
		logError(
			'Your twitter client is not configured yet!',
			[ 'First call the init method with your relevant config' ]
		);
		throw new Error('NOT_INITIALIZED');
	}
};

class ApiUtil {
	constructor(config) {
		my.checkForConfig(config);
		my.client = new Twitter(config);
	}
	makeCallPromise(path = '', params = {}) {
		return new Promise((resolve, reject) => {
			my.client.get(path, params, (error, tweets, response) => {
				const logMessages = [
					`path: ${path}`,
					`params: ${JSON.stringify(params)}`
				];
				if (error) {
					logError(
						'Twitter REST API fail',
						logMessages,
						`Èrror: ${JSON.stringify(error, null, 4)}`
					);
					reject(error);
					return;
				}
				logSuccess(
					'Twitter REST API success',
					logMessages,
					`Tweets collected: ${tweets.length || tweets.statuses.length}`
				);
				resolve(tweets);
			});
		});
	}

	makeCallStream(path, params, onData, onError) {
		const stream = my.client.stream(path, params);
		const logMessages = [
			`path: ${path}`,
			`params: ${JSON.stringify(params)}`
		];
		stream.on('data', (tweet) => {
			logSuccess(
				'Twitter Streaming API success',
				logMessages,
				`Tweet collected:
- Text: ${tweet.text.replace(/(\r\n|\n|\r)/gm,' \u21B5  ')}
- Author: ${tweet.user.name} - @${tweet.user.screen_name}`
			);
			onData(tweet);
		});
		stream.on('error', (error) => {
			logError(
				'Twitter Streaming API fail',
				logMessages,
				`Error: ${JSON.stringify(error, null, 4)}`
			);
			onError(error);
		});
		return stream;
	}
}

module.exports = ApiUtil;
