/*
STACK - Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

Using an object as the underlying data structure.
*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack
*** Additional Exercises:
Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
 */

function Stack(capacity) {
	this.elements = {};
	this.elements.length = 0;
	this.top = -1;
}

Stack.prototype.push = function(value) {
	this.elements[++this.top] = value;
	this.elements.length++;
	return this.elements.length;

};
// Time complexity:

Stack.prototype.pop = function() {

	if (this.top === -1) {
		console.log("Stack is empty");
		return;
	}
	//TODO check the increment behaviour
	delete this.elements[this.top];
	this.elements.length--;
	return this.elements[this.top--];
};

Stack.prototype.peek = function() {
	if (this.top === -1) {
		console.log("Stack is empty");
		return;
	}
	return this.elements[this.top];
};

Stack.prototype.count = function() {
	return this.elements.length;
};

// Test the stack 

var stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));

console.log(stack.pop());
console.log(stack.pop());

for( var i = 0 ; i < stack.elements.length;i++){
	console.log(stack.elements[i]);
}

