var path = require('path');
var fs = require('fs');
var isset = require('./isset');

var lsDir = function(dir, recursive) {
	if (!isset(recursive)) {
		recursive = true;
	}
	var results = [];
	var list = fs.readdirSync(dir);
	list.forEach(function(file) {
		var stat = fs.statSync(path.join(dir, file));
		if (stat && stat.isDirectory()) {
			if (recursive) {
				results = results.concat(lsDir(path.join(dir, file)));
			}
			else {
				results.push(path.join(dir, file));
			}
		}
		else {
			results.push(path.join(dir, file));
		}
	});
	return results;
};

module.exports = lsDir;