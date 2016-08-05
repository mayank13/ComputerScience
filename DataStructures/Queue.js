//A basic queue implementation using Arrays. Need to be refactored

var Queue = function() {
	this.elements = [];
	this.front = -1;
	this.back = -1;
}

Queue.prototype.enqueue = function(data) {
	if (this.front === -1) {
		this.front = 0;
		this.back = 0;
		this.elements[this.back] = data;
	} else {
		this.elements[++this.back] = data;
	}

};

Queue.prototype.dequeue = function() {
	if (this.front === -1)
		console.log("Queue is empty");
	var element = this.elements[this.front];
	this.front++;
	if (this.front > this.back) {
		this.front = -1;
		this.back = -1;
	}

	return element;
}

Queue.prototype.printQueue = function() {
	if (this.front === -1 && this.back === -1) {
		console.log("Queue is Empty");
		return;
	}
	for (var i = this.front; i <= this.back; i++) {
		console.log(this.elements[i]);
	}
}

Queue.prototype.isEmpty = function() {
	/*	if(this.front === -1 &&  this.back === -1)
			return true;
		return false;*/
	return this.front === -1 && this.back === -1 ? true : false;
}

function testQueue() {
	var q = new Queue();
	q.enqueue(1);
	q.enqueue(2);
	q.enqueue(3);
	q.enqueue(4);
	q.enqueue(5);


	q.printQueue();

	q.dequeue();
	q.dequeue();
	q.printQueue();

	q.dequeue();
	q.dequeue();
	q.dequeue();


	q.printQueue();
	console.log("Is empty q-- > " + q.isEmpty());
	console.log("--end of test");


}

testQueue();

module.exports = Queue;