const apiUtil = require('./apiUtil');

const that = {};
const my = {};

my.onData = () => {};
my.onError = () => {};

that.init = apiUtil.init;

that.streamStatusesByKeyword = (keyword, oD = my.onData, oE = my.onError) => {
	const params = { track: keyword };
	const path = 'statuses/filter';
	return apiUtil.makeCallStream(path, params, oD, oE);
};

module.exports = that;
