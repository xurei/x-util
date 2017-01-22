module.exports = {
	isset: require('./isset'),
	arrayToMap: require('./array-to-map'),
};

if (!require('is-browser')) {
	module.exports = Object.assign(module.exports, {
		lsDir: require('./ls-dir'),
	});
}