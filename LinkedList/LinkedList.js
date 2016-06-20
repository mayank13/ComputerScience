function Node() {
	this.data = null;
	this.next = null;
}

function LinkedList() {
	this.length = 0;
	this.head = null;
}

LinkedList.prototype.insertNodeFront = function(head, data) {
	var curr = new Node();
	curr.data = data;

	if (head === null) {
		this.head = curr;
		return this.head;
	}

	curr.next = head;
	this.head = curr;
	this.length++;
	return this.head;

}

LinkedList.prototype.removedNode = function(head, data) {
	var currNode = head;
	var prevNode = head;

	while (currNode != null) {

		if (currNode.data === data) break;
		prevNode = currNode;
		currNode = currNode.next;
	}
	prevNode.next = currNode.next;
	return head;
}

LinkedList.prototype.traverseList = function(head) {
	var currNode = head;
	//NOTE: DO NOT check currNode.next as it will skip the last node
	while (currNode !== null) {
		console.log(currNode.data);
		currNode = currNode.next;
	}
}

function testLinkList() {
	var ll = new LinkedList();
	ll.insertNodeFront(ll.head, 5);
	ll.insertNodeFront(ll.head, 4);
	ll.insertNodeFront(ll.head, 3);
	ll.insertNodeFront(ll.head, 2);
	ll.insertNodeFront(ll.head, 1);
	console.log("---Traverse the created list");
	ll.traverseList(ll.head);

	ll.removedNode(ll.head, 3);
	console.log("---Traverse the created list");
	ll.traverseList(ll.head);

	ll.removedNode(ll.head, 5);
	console.log("---Traverse the created list");
	ll.traverseList(ll.head);


}

testLinkList();