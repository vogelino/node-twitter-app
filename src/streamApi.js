const ApiUtil = require('./ApiUtil');

const emptyFunc = () => {};

class StreamApi {
	constructor(config) {
		this.apiUtil = new ApiUtil(config);
	}
	streamStatusesByKeyword(keyword, oD = emptyFunc, oE = emptyFunc) {
		const params = { track: keyword, language: 'de', replies: false };
		const path = 'statuses/filter';
		return this.apiUtil.makeCallStream(path, params, oD, oE);
	};
}

module.exports = StreamApi;
