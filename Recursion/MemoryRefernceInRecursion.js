function arrRecurse(arr) {
	if (arr[0] === 0) return;
	for(var i = 0 ; i < arr.length ; i++ ){
		arr[i]--;
	}
	console.log(arr);
	arrRecurse(arr);
}

var dummyArr = [5,4,3,2,1];
arrRecurse(dummyArr);
console.log(dummyArr);