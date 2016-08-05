function minHeap() {
	this.data = [];
	this.lastPosition = 0;
}

minHeap.prototype.minimum = function() {
	return this.data[1];
};

minHeap.prototype.insert = function(key) {
	this.lastPosition++;
	this.data[this.lastPosition] = key;
	var temp;
	var currentPosition = this.lastPosition;
	var parentPosition = Math.floor(this.lastPosition / 2);
	while (key < this.data[parentPosition] && parentPosition > 0) {
		temp = this.data[parentPosition];
		this.data[parentPosition] = this.data[currentPosition];
		this.data[currentPosition] = temp;
		currentPosition = parentPosition;
		parentPosition = Math.floor(parentPosition / 2);
	}


};

minHeap.prototype.deleteMinimum = function() {
	var currentPosition = 1;
	var temp = this.data[this.lastPosition];
	this.data[this.lastPosition] = this.data[currentPosition];
	this.data[currentPosition] = temp;
	this.data.splice(this.lastPosition, 1);
	console.log(this.data);
		//Bubble down the newly inserted node
	while ((this.data[currentPosition * 2] && (this.data[currentPosition] > this.data[currentPosition * 2])) || (this.data[currentPosition * 2 + 1] && (this.data[currentPosition] > this.data[currentPosition * 2 + 1]))) {
		//NOTE : Mistake in conditional logic. The current node should be swapped with the minimum element of the two children of the binary heap
		if (this.data[currentPosition*2] < this.data[currentPosition * 2 +1]) {
			temp = this.data[currentPosition];
			this.data[currentPosition] = this.data[currentPosition * 2];
			this.data[currentPosition * 2] = temp;
			currentPosition = currentPosition * 2;
		} else {
			temp = this.data[currentPosition];
			this.data[currentPosition] = this.data[currentPosition * 2 + 1];
			this.data[currentPosition * 2 + 1] = temp;
			currentPosition = currentPosition * 2 + 1;
		}
	}
	this.lastPosition--;

};

//Test heap 

var heap = new minHeap();
heap.insert(5);
console.log(heap.data);
heap.insert(2);
console.log(heap.data);
heap.insert(1);
console.log(heap.data);
heap.insert(4);
console.log(heap.data);
heap.insert(3);
console.log(heap.data);

heap.deleteMinimum();
console.log(heap.data);


heap.deleteMinimum();
console.log(heap.data);