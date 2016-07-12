var i = 0
var fakeAjax = function() {
	setTimeout(function() {
		console.log("Fake Ajax" + i++);
	}, 1000);
}

var callAjax = function() {
	fakeAjax();
	setTimeout(function() {
		callAjax();
	}, 1000);
}

callAjax();