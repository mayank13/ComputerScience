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
	return element;
}

Queue.prototype.printQueue = function() {
	for (var i = this.front; i <= this.back; i++) {
		console.log(this.elements[i]);
	}
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

}

testQueue();