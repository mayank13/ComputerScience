var readArray = [];
var fs = require('fs');
fs.readFile('./data.json', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
	readArray = data.split("\r\n");
	console.log(readArray);
	console.log(quickSort(readArray));
});

function quickSort(arr) {
	if(arr.length <=1) return arr;
	var left = [];
	var right = [];
	var pivot = arr[0];

	for (var i = 1 ; i < arr.length ; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot).concat(quickSort(right));
}