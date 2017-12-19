var fs = require('fs');
var permutations = require('steinhaus-johnson-trotter');

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(doStuff(data));
});

var doStuff = function(data) {
  var edges = lines(data).map(edge).reduce(buildEdges, {});
  return Math.max.apply(null, permutations.all(Object.keys(edges)).map(function(route) {
    return null, total(edges, route);
  }));
};

var lines = function(data) {
  return data.split(/\n/);
};

var edge = function(line) {
  var edgeSize = line.split(/\s=\s/);
  var size = parseInt(edgeSize[1], 10)
  var nodes = edgeSize[0].split(/\sto\s/);
  nodes.sort();
  var aNode = nodes[0];
  var bNode = nodes[1];
  return [aNode, bNode, size];
};

var buildEdges = function(edges, edge) {
  var aNode = edge[0];
  var bNode = edge[1];
  var size = edge[2];

  if (!aNode || !bNode | isNaN(size) ) {
    return edges;
  }
  setEdge(edges, aNode, bNode, size);
  setEdge(edges, bNode, aNode, size);
  return edges;
};

var routes = function(graph) {
  return Object.keys(graph).map(function(aNode) {
    return Object.keys(graph[aNode]).map(function(bNode) {
      return [aNode + '-' + bNode, graph[aNode][bNode]];
  })});
};

var setEdge = function (graph, aNode, bNode, size) {
  var nodeEdges = graph[aNode];
  if (!nodeEdges) {
    graph[aNode] = nodeEdges = {};
  }
  nodeEdges[bNode] = size;
};

var sum = function(a, b) {
  return a+b;
};

var total = function(edges, route) {
  var result = 0;
  var i = 0;
  var startNode = route[i];
  i++;
  while (i < route.length) {
    var nextNode = route[i];
    result+= edges[startNode][nextNode];
    startNode = nextNode;
    i++;
  }
  return result;
};

