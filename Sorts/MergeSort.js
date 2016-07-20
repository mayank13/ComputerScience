var readArray = [];
var fs = require('fs');
fs.readFile('./data.json', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
	readArray = data.split("\r\n");
	console.log(readArray);
	console.log(mergeSort(readArray));
});


function mergeSort(arr) {
	var start = 0;
	var end = arr.length;
	var mid = Math.floor(end / 2);
	if (arr.length <= 1) return arr;
	var left = arr.slice(start, mid);
	var right = arr.slice(mid, end);
	return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
	var j = 0;
	var i = 0;
	var k = 0;
	var results = [];
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			results.push(left[i]);
			i++;
			k++;
		} else {
			results.push(right[j]);
			j++;
			k++;
		}
	}

	while (left && i < left.length) {
		results.push(left[i]);
		i++;
		k++;
	}
	while (right && j < right.length) {
		results.push(right[j]);
		j++;
		k++;
	}
	return results;
}