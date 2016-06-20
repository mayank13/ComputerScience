//Brute Force

function pairWise(arr) {
	var max = 0;
	var product = 1;
	var num1, num2;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			product = arr[i] * arr[j];
			if (product > max) {
				max = product;
				num1 = arr[i];
				num2 = arr[j];
			}

		}
	}
	console.log("Max Product" + max);
	console.log("Num 1-->" + num1);
	console.log("Num 2-->" + num2);

	}


	// Test Stub 
	pairWise([1, 2, 3]);
	console.log("--------");
	pairWise([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);
	console.log("--------");
	pairWise([4, 6, 2, 6, 1]);