
function minHeap() {
	this.data = [];
	this.lastPosition = 1;
}

minHeap.prototype.minimum = function() {
	return this.data[1];
}

minHeap.prototype.insert = function(key) {
	this.data[this.lastPosition] = key;
	var temp;
	var currentPosition = this.lastPosition;
	var parentPosition = Math.floor(this.lastPosition / 2);
	while (key < this.data[parentPosition] && parentPosition > 0) {
		temp = this.data[parentPosition];
		this.data[parentPosition] = this.data[currentPosition];
		this.data[currentPosition] = temp;
		currentPosition = parentPosition;
		parentPosition = Math.floor(parentPosition/2);
	}
	this.lastPosition++;

}

minHeap.prototype.deleteMinimum = function() {

}

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