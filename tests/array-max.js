const chai = require('chai');
const expect = chai.expect;

const arrayMin = require('../array-max');

describe('arrayMax', function() {
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
	it('should return the maximal value of an array', function() {
		expect(arrayMin([10,2,5,8,9])).to.be.eq(10);
	});
	it('should allow to choose the compare function', function() {
		var out = arrayMin([
			{name:'d', value:42},
			{name:'a', value:25},
			{name:'b', value:3},
			{name:'c', value:19},
		], (a,b) => a.value - b.value);
		
		expect(out).to.deep.eq({name:'d', value:42});
	});
});