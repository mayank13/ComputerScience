setTimeout(function() {
	console.log("3");
	setTimeout(function() {
		console.log("2");
		setTimeout(function() {
			console.log("1");
		}, 1000);
	}, 1000);
}, 1000);