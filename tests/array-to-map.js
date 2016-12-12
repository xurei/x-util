const chai = require('chai');
const expect = chai.expect;

const arrayToMap = require('../array-to-map');

describe('arrayToMap', function() {
	it('should throw if input is not an array', function() {
		expect(() => arrayToMap(42)).to.throw(Error);
		expect(() => arrayToMap(null)).to.throw(Error);
		expect(() => arrayToMap("string")).to.throw(Error);
		expect(() => arrayToMap({1: 'this', 2:'is', 3:'weird'})).to.throw(Error);
	});
	it('should convert the array as specified', function() {
		var array = [
			{id:1, text:'foo'},
			{id:"plop", text:'bar'},
			{id:null, text:'hello world'}
		];
		var map = arrayToMap(array, (a) => a.id);
		
		expect(map[1].text).to.be.equal('foo');
		expect(map.plop.text).to.be.equal('bar');
		expect(map[null].text).to.be.equal('hello world');
	});
});