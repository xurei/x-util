var arrayMin = require('./array-min');

module.exports = function arrayMax(array, comparefn) {
	if (typeof(comparefn) === 'undefined') {
		comparefn = function (a,b) { return a - b; };
	}
	
	return arrayMin(array, function(a,b) {
		return - comparefn(a,b);
	});
};