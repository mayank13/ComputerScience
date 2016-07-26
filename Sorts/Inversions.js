// Brute Force Inversion Count
var fs = require('fs');
fs.readFile('./data.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
	readArray = data.split("\r\n").map(Number);
	var startTime = Date.now();
	console.log(countInversions(readArray));
	var endTime = Date.now();
	console.log((endTime - startTime) / (1000) )

});

function countInversions(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				count++;
			}
		}
	}
	return count;
}