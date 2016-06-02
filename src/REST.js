const client = require('./client');
const { logError, logSuccess } = require('./logger');

const that = {};
const my = {};

my.makeCallPromise = (path = '', params = {}) => {
	return new Promise((resolve, reject) => {
		client.get(path, params, (error, tweets, response) => {
			const logMessages = [
				`path: ${path}`,
				`params: ${JSON.stringify(params)}`
			];
			if (error) {
				logError(
					'Twitter REST API fail',
					logMessages,
					`Èrror: ${JSON.stringify(error)}`
				);
				reject(error);
				return;
			}
			logSuccess(
				'Twitter REST API success',
				logMessages,
				`Tweets collected: ${tweets.length}`
			);
			resolve(tweets);
		});
	});
};

that.getUserTimeline = (username) => {
	const params = { screen_name: username };
	const path = 'statuses/user_timeline';
	return my.makeCallPromise(path, params);
};

module.exports = that;
