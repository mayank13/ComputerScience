function quickSort(arr, lo, hi) {
	if (hi - lo < 2) {
		return;
	}
	var partitionIndex = partition(arr, lo, hi);
	quickSort(arr, lo, partitionIndex - 1);
	quickSort(arr, partitionIndex + 1, hi);
	console.log(arr);

}

function partition(arr, lo, hi) {
	var partitionValue = arr[lo];
	var i = lo + 1;
	var j = lo + 1;
	var temp;
	while (i <= hi) {
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

	return j;
}

quickSort([5, 3, 7, 4], 0, 3);