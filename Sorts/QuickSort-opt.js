var readArray = [];
var comparisonCount = 0;
var cc = 0 ; 
var fs = require('fs');
fs.readFile('./QuickSort.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	readArray = data.split("\r\n").map(Number);
	quickSort(readArray, 0, readArray.length);
	console.log(readArray.toString());
	console.log("Total Count"+ comparisonCount);
	console.log("Total Count"+ cc);
});

function quickSort(arr, lo, hi) {
	if (hi - lo < 2) {
		return;
	}
	var partitionIndex = partition(arr, lo, hi);
	quickSort(arr, lo, partitionIndex - 1);
	comparisonCount += partitionIndex - lo - 1 ;//(partitionIndex - 1) - (lo) + 1
	quickSort(arr, partitionIndex + 1, hi);
	comparisonCount += hi - partitionIndex + 1 ;
	//console.log(arr);

}

function partition(arr, lo, hi) {
	cc += hi-lo;
	var partitionValue = arr[lo];
	var i = lo + 1;
	var j = lo + 1;
	var temp;
	while (i <= hi) {
		//cc++;
		if (arr[i] < partitionValue) {
			temp = arr[j]
			arr[j] = arr[i];
			arr[i] = temp;
			j++;
		}
		i++;
	}
	temp = arr[lo];
	arr[lo] = arr[j - 1];
	arr[j - 1] = temp;

	return j-1;
}