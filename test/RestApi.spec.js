const { RestApi } = require('../src/api');
const expect = require('expect');

describe('REST API wrapper', () => {
	describe('getUserTimeline', () => {
		it('should throw an error without initialization', () => {
			const apiCreation = () => new RestApi();
			expect(apiCreation).toThrow(/NOT_INITIALIZED/);
		});

		it('should return a promise', () => {
			const api = new RestApi({});
			expect(typeof api.getUserTimeline('test').then).toEqual('function');
		});
	});
});
