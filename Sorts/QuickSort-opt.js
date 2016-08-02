var readArray = [];
var comparisonCount = 0;
var cc = 0;
var fs = require('fs');
fs.readFile('./QuickSort.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	readArray = data.split("\r\n").map(Number);
	//NOTE: Initial wrong condition readArray.length
	quickSort(readArray, 0, readArray.length - 1);
	console.log(readArray.toString());
	console.log("Total Count" + comparisonCount);
	console.log("Total Count" + cc);
});

function quickSort(arr, lo, hi) {
	//NOTE : Intial wrong condition hi - lo
	if ((hi - lo + 1) < 2) {
		return;
	}
	var partitionIndex = partition(arr, lo, hi);
	//console.log(partitionIndex);
	//console.log(arr);
	quickSort(arr, lo, partitionIndex - 1);
	comparisonCount += partitionIndex - lo - 1; //(partitionIndex - 1) - (lo) + 1
	quickSort(arr, partitionIndex + 1, hi);
	comparisonCount += hi - partitionIndex + 1;
	//console.log(arr);

}

function partition(arr, lo, hi) {
	cc += hi - lo;
	/*var t = arr[hi];
	arr[hi] =  arr[lo];
	arr[lo] = t;*/
	//var partitionValue = arr[lo];
	var partitionIndex = selectPartitionMedian(arr, lo, hi);
	var t = arr[partitionIndex];
	arr[partitionIndex] = arr[lo];
	arr[lo] = t;
	var partitionValue = arr[lo];
	//console.log("Partition Value::" + partitionValue);
	var i = lo + 1;
	var j = lo + 1;
	var temp;
	while (i <= hi) {
		//cc++;
		if (arr[i] < partitionValue) {
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
			j++;
			//console.log(arr);
		}
		i++;
	}
	temp = arr[lo];
	arr[lo] = arr[j - 1];
	arr[j - 1] = temp;

	return j - 1;
}
//NOTE : Follow consistent comparisons < or greater

function selectPartitionMedian(arr, lo, hi) {
	var loNum = arr[lo];
	var mid = (hi - lo + 1) % 2 !== 0 ? (lo + hi) / 2 : Math.floor((hi + lo) / 2);
	var midNum = arr[mid];
	var hiNum = arr[hi];
	if ((hi - lo + 1) < 2) {
		return lo;
	} else if (loNum < midNum) {
		if (midNum < hiNum) {
			return mid;
		} else if (loNum < hiNum) {
			return hi;
		} else {
			return lo;
		}
	} else {
		if (midNum < hiNum) {
			if (loNum < hiNum) {
				return lo;
			} else {
				return hi;
			}
		} else {
			return mid;
		}
	}
}