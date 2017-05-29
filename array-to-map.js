module.exports = function arrayToMap(array, keyfn, valuefn) {
	if (typeof(valuefn) === 'undefined') {
		valuefn = function (a) {return a;};
	}
	
	if (!Array.isArray(array)) {
		throw new TypeError('expected array, got ' + typeof(array));
	}
	
	var out = {};
	
	for (var i=0; i<array.length; ++i) {
		out[keyfn(array[i])] = valuefn(array[i]);
	}
	
	return out;
};