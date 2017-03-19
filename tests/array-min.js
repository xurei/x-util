const chai = require('chai');
const expect = chai.expect;

const arrayMin = require('../').arrayMin;

describe('arrayMin', function() {
	it('should throw if input is not an array', function() {
		expect(() => arrayMin()).to.throw(Error);
		expect(() => arrayMin(42)).to.throw(Error);
		expect(() => arrayMin(null)).to.throw(Error);
		expect(() => arrayMin("string")).to.throw(Error);
		expect(() => arrayMin({1: 'this', 2:'is', 3:'weird'})).to.throw(Error);
	});
	it('should return undefined if the array is empty', function() {
		expect(arrayMin([])).to.be.eq(undefined);
	});
	it('should return the minimal value of an array', function() {
		expect(arrayMin([10,2,5,8,9])).to.be.eq(2);
	});
	it('should allow to choose the compare function', function() {
		var out = arrayMin([
			{name:'d', value:42},
			{name:'a', value:25},
			{name:'b', value:3},
			{name:'c', value:19},
		], (a,b) => a.value - b.value);
		
		expect(out).to.deep.eq({name:'b', value:3});
	});
});