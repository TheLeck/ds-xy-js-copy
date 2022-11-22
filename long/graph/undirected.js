
import Dictionary from './dictionary.js'

export default
function Graph() {
  var vertices = [] 
  var adjList = new Dictionary() 
  
  this.addVertex = function(v){
    vertices.push(v) 
    adjList.set(v, []) 
  }
  this.addEdge = function(v, w){
    adjList.get(v).push(w) 
    adjList.get(w).push(v) 
  }
  this.toString = function(){
    var s = ''
    for (var i=0; i<vertices.length; i++){
      s += vertices[i] + ' -> '
      var neighbors = adjList.get(vertices[i]) 
      for (var j=0; j<neighbors.length; j++){ 
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
    this.search = function(n){
      let k = 0
      for (var i=0; i<vertices.length; i++){
        if(vertices[i] == n){ console.log('Encontrado'); k++}
      }
      if(k == 0){console.log('No encontrado')}
  }
    this.delete = function(n){
      for (var i=0; i<vertices.length; i++){
        if(vertices[i] == n){
          for(let j=0; j<(vertices.length - (i+1)); j++){
            vertices[i+j] = vertices[i+j+1]
          }
          vertices.pop()
          //console.log(vertices)
          //adjList.delete(n)
          for(let p = 0; p<vertices.length; p++){
            let aux = adjList.get(vertices[p])
            //console.log(aux.length, 'eso')
            for(let y = 0; y < aux.length; y++){
              if(aux[y]==n){
                while(y<aux.length){
                  aux[y] = aux[y+1]
                  y++
                }
                aux.pop()
              }
            }
          }
          //adjList.eso()
          //console.log(adjList.get(vertices[0]))
        }
      }
    }
}