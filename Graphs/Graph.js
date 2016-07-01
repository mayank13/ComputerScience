// Design a Graph data structure in JS 
/* What should the API have: adjNodes, isConnected(u,v)*/

// passing the array to generate the graph

var Queue = require('../LinkedList/Queue.js');

var q = new Queue();
var str = "";

function Graph() {
	this.nodes = [];

	this.nodeVisited = [];
	//Initialise the nodeVisted Array
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodeVisited[i] = false;
	}
}

Graph.prototype.initNodeVisited = function() {
	//Initialise the nodeVisted Array
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodeVisited[i] = false;
	}
}

Graph.prototype.addEdge = function(v, w) {
	if (this.nodes[v] === undefined) {
		this.nodes[v] = [];
	}
	if (this.nodes[w] === undefined) {
		this.nodes[w] = [];
	}
	//Updating the adjacency list for both the nodes since Undirected graph
	if (this.nodes[v].indexOf(w) === -1)
		this.nodes[v].push(w);
	if (this.nodes[w].indexOf(v) === -1)
		this.nodes[w].push(v);
};

Graph.prototype.adjNodes = function(Graph, vertex) {
	if (Graph.nodes[vertex] === undefined) {
		console.log("No Adjacent Nodes");
		return;
	}
	for (var i = 0; i < Graph.nodes[vertex].length; i++) {
		//console.log(Graph.nodes[vertex][i]);
		str += Graph.nodes[vertex][i] + " ";
	}

	return Graph.nodes[vertex];

};

Graph.prototype.DFS = function(s) {

	//if (this.nodeVisited[s]) return;
	if (!this.nodeVisited[s]) {
		this.nodeVisited[s] = true;
		console.log(s);
	}

	//Can be refactored by removing this 
	var adjacentNodesForS = this.adjNodes(this, s);
	for (var i = 0; i < adjacentNodesForS.length; i++) {
		//this.nodeVisited[adjacentNodesForS[i]] = true;
		if (!this.nodeVisited[adjacentNodesForS[i]]) {
			//console.log(adjacentNodesForS[i]);
			this.DFS(adjacentNodesForS[i]);
		}

	}
};

Graph.prototype.BFS = function(s) {
	q.enqueue(s);
	var adjacentNodesForS = [];
	while (!q.isEmpty()) {
		var dqElement = q.dequeue();

		if (this.nodeVisited[dqElement] !== true) {
			adjacentNodesForS = this.adjNodes(this, dqElement);
			this.nodeVisited[dqElement] = true;
			console.log(dqElement);
			//Is this loop required?
			for (var i = 0; i < adjacentNodesForS.length; i++) {
				q.enqueue(adjacentNodesForS[i]);
			}
		}

	}
}



function createGraph() {
	var g = new Graph();
	g.addEdge(0, 1);
	g.addEdge(0, 2);
	g.addEdge(1, 3);
	g.addEdge(2, 3);
	g.addEdge(1, 3);
	g.addEdge(3, 4);

	g.initNodeVisited();

	console.log("Adjacent Node for 0");
	Graph.prototype.adjNodes(g, 0);

	console.log("Adjacent Node for 1");
	Graph.prototype.adjNodes(g, 1);

	console.log("Adjacent Node for 3");
	Graph.prototype.adjNodes(g, 3);

	//Call DFS
	console.log("-------DFS-----");
	g.DFS(0);
	//console.log(str);

	console.log("--BFS--");
	g.initNodeVisited();
	g.BFS(0);

}

createGraph();