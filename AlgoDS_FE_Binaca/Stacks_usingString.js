function Stack() {
	this.data = "";
};

Stack.prototype.push = function(data) {
	this.data += "__" + data;
};
Stack.prototype.pop = function() {
	var lastIndex;
	lastIndex = this.data.lastIndexOf("__");
	var poppedvalue = this.data.substring(lastIndex + 2);
	console.log("Popped Value->" + poppedvalue);
	this.data = this.data.substring(0,lastIndex);
};
Stack.prototype.size = function() {
	var count = 0;
	for (var i = 0; i < this.data.length - 1; i++) {
		if (this.data.charAt(i) === "_" && this.data.charAt(i + 1) == '_')
			count++;
	}
	return count;
}

function testStacks() {
	var stack = new Stack();
	stack.push("data1");
	stack.push("data2");
	stack.push("data3");

	console.log(stack.data);
	console.log(stack.size());

	stack.pop();
	console.log(stack.data);
}

testStacks();