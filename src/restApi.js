const ApiUtil = require('./ApiUtil');

class RestApi {
	constructor(config) {
		this.apiUtil = new ApiUtil(config);
	}
	getUserTimeline(username) {
		const params = { screen_name: username };
		const path = 'statuses/user_timeline';
		return this.apiUtil.makeCallPromise(path, params);
	}
}

module.exports = RestApi;
