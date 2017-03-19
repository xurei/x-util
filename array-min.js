module.exports = function arrayMin(array, comparefn) {
	if (typeof(comparefn) === 'undefined') {
		comparefn = function (a,b) { return a - b; };
	}
	
	if (!Array.isArray(array)) {
		throw new TypeError("expected array, got " + typeof(array));
	}
	
	if (array.length === 0) {
		return;
	}
	
	return array.reduce(function(acc, item) {
		return (comparefn(item, acc) < 0 ? item : acc);
	}, array[0]);
};