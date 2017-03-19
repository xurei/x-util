# xurei-util
Javascript Toolbox

[![wercker status](https://app.wercker.com/status/ce7d4d3b6756d08c626eda9406970052/s/master "wercker status")](https://app.wercker.com/project/byKey/ce7d4d3b6756d08c626eda9406970052)

### isset(variable)
Check that a variable is defined and not null.

### lsDir(dir, recursive = true)
List the content of a directory synchronously and returns each files as an array.

### arrayToMap(array, keyFn(item), valueFn = `(a) => a`)
Convert an array to a map using the provided keyFn(item) and valueFn(item) functions.

### arrayMin & arrayMax(array, compareFn = `(a,b) => a-b`)
Returns the minimal/maximal item in an array, according to the provided compareFn