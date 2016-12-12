module.exports = function arrayToMap(array, keyfn) {
	if (!Array.isArray(array)) {
		throw new TypeError("expected array, got " + typeof(array));
	}
	
	var out = {};
	
	for (var i=0; i<array.length; ++i) {
		out[keyfn(array[i])] = array[i];
	}
	
	return out;
};