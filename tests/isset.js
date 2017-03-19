const chai = require('chai');
const expect = chai.expect;

const isset = require('../').isset;

describe('isset', function() {
	it('should return false if null or undefined', function() {
		expect(isset(null)).to.be.false;
		expect(isset(undefined)).to.be.false;
	});
	it('should return true for anything else', function() {
		expect(isset([])).to.be.true;
		expect(isset("undefined")).to.be.true;
		expect(isset(42)).to.be.true;
		expect(isset({})).to.be.true;
		expect(isset((a) => true)).to.be.true;
		expect(isset((a) => null)).to.be.true;
	});
});