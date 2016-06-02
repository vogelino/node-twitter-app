const chalk = require('chalk');

const that = {};
const my = {};

my.log = (title, messages, response, color, icon = '') => {
	let tColor = chalk.inverse[color].bold;
	let mColor = chalk[color];
	console.log('\n');
	console.log(icon ? tColor.white(` ${icon} `) : '', tColor(` ${title} `));
	messages.forEach((msg) => console.log(mColor(`- ${msg}`)));
	console.log('\n', mColor(response));
	console.log('\n');
};

that.logError = (title, messages, error) => {
	my.log(title, messages, error, 'red', '×');
};

that.logSuccess = (title, messages, response) => {
	my.log(title, messages, response, 'green', '✔\u2009');
};

module.exports = that;
