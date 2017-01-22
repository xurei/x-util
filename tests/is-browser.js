const chai = require('chai');
const expect = chai.expect;

const xutil = require('../index');

describe('xurei-util', function() {
	it('should have lsDir on Node', function() {
		expect(xutil).to.include.keys('lsDir');
	});
});