//
// your undirected graph solution here
//
import Graph from '../../../long/graph/undirected.js'

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
console.log('\nEliminando: C')
graph.delete('C')
console.log(graph.toString())
