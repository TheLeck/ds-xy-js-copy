//
// your solution here
//
// pick one:
// digraph ------------------------------------------------------
// dfs on an undirected graph
// bfs on an undirected graph
//
import Graph from '../../../long/graph/directed.js'

var graph = new Graph()
var myVertices = ['A','B','C','D','E','F','G','H','I']
for (var i=0; i<myVertices.length; i++){
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log(graph.toString())
graph.search('J')
graph.search('A')
console.log('\nEliminando: H')
graph.delete('H')
console.log(graph.toString())