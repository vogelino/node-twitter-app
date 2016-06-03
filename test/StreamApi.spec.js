const { StreamApi } = require('../src/api');
const expect = require('expect');
const EventEmitter = require('events');

describe('REST API wrapper', () => {
	describe('streamStatusesByKeyword', () => {
		it('should throw an error without initialization', () => {
			const apiCreation = () => new StreamApi();
			expect(apiCreation).toThrow(/NOT_INITIALIZED/);
		});

		it('should be an instance of EventEmitter', () => {
			const api = new StreamApi({});
			expect(api.streamStatusesByKeyword('test') instanceof EventEmitter).toEqual(true);
		});
	});
});
