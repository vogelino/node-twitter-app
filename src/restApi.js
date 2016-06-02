const apiUtil = require('./apiUtil');

const that = {};
const my = {};

that.init = apiUtil.init;

that.getUserTimeline = (username) => {
	const params = { screen_name: username };
	const path = 'statuses/user_timeline';
	return apiUtil.makeCallPromise(path, params);
};

module.exports = that;
