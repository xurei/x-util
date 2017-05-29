const chai = require('chai');
const expect = chai.expect;

const arrayMax = require('../').arrayMax;

describe('arrayMax', function() {
	it('should throw if input is not an array', function() {
		expect(() => arrayMax()).to.throw(Error);
		expect(() => arrayMax(42)).to.throw(Error);
		expect(() => arrayMax(null)).to.throw(Error);
		expect(() => arrayMax('string')).to.throw(Error);
		expect(() => arrayMax({1: 'this', 2:'is', 3:'weird'})).to.throw(Error);
	});
	it('should return undefined if the array is empty', function() {
		expect(arrayMax([])).to.be.eq(undefined);
	});
	it('should return the maximal value of an array', function() {
		expect(arrayMax([10,2,5,8,9])).to.be.eq(10);
	});
	it('should allow to choose the compare function', function() {
		var out = arrayMax([
			{name:'d', value:42},
			{name:'a', value:25},
			{name:'b', value:3},
			{name:'c', value:19},
		], (a,b) => a.value - b.value);
		
		expect(out).to.deep.eq({name:'d', value:42});
	});
});