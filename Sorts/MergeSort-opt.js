var fs = require('fs');
fs.readFile('./data.json', 'utf-8', function(err, data) {
	var inputArray = data.split('\r\n').map(Number);
	//console.log(inputArray);
	mergerSort(inputArray);
});

function mergerSort(arr) {
	var aux = [];
	sort(arr, aux, 0, arr.length - 1);
	//console.log(arr);
}

function sort(arr, aux, lo, hi) {
	if (hi <= lo) return;
	var mid = Math.floor((hi + lo) / 2);
	sort(arr, aux, lo, mid);
	sort(arr, aux, mid + 1, hi);
	merge(arr, aux, lo, mid, hi);
}

function merge(arr, aux, lo, mid, hi) {

	//copying
	for (var i = lo; i <= hi; i++) {
		aux[i] = arr[i];
	}
	var i = lo;
	var j = mid + 1;
	var k = lo;


	// This looping is not easily readable, need to refactor
	while (i <= mid && j <= hi) {
		if (aux[j] < aux[i]) {
			arr[k] = aux[j];
			j++;
			k++;
		} else {
			arr[k] = aux[i];
			i++;
			k++;
		}
	}

	while (i <= mid) {
		arr[k] = aux[i];
		i++;
		k++;
	}
	while (j <= hi) {
		arr[k] = aux[j];
		j++;
		k++;
	}
	console.log(arr);
}
//Tests
//console.log("Test merge ::");
//merge([4, 5, 6, 1, 2, 3], [], 0, 2, 5);