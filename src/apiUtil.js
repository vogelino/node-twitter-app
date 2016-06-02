const Twitter = require('twitter');
const { logError, logSuccess } = require('./logger');

const that = {};
const my = {};

my.checkForClient = () => {
	if (!my.client) {
		logError(
			'Your twitter client is not configured yet!',
			[ 'First call the init method with your relevant config' ]
		);
		return true;
	}
	return false;
};

that.makeCallPromise = (path = '', params = {}) => {
	return my.checkForClient() || new Promise((resolve, reject) => {
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
};

that.makeCallStream = (path, params, onData, onError) => {
	if (my.checkForClient()) {
		return;
	};
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
- Text: ${tweet.text.replace('\n', ' ')}
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
};

that.init = (config) => {
	my.client = new Twitter(config);
};

module.exports = that;
