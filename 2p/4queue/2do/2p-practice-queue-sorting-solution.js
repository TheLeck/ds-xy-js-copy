function Queue() {
  this.dataStore = []

  this.enqueue= function(element) {
    this.dataStore.push(element)
  }

  this.dequeue= function() { 
   if (this.isEmpty())
        console.log('empty')
    else
     this.dataStore.shift()
  }

  this.front= function() {
	  return this.dataStore[0]
  }

  this.back= function() {
	  return this.dataStore[this.dataStore.length-1]
  }

  this.toString= function() {
	  let retStr = "";
	  for (let i = 0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	  }
	  return retStr
  }

  this.isEmpty= function() {
	  if (this.dataStore.length == 0)
	    return true	
	  else 
	    return false
  }

  this.full= function() {
	  if (this.dataStore.length === this.top)
	    return true	
	  else 
	    return false
  }

  this.size=function() {
    return this.dataStore.length;
  }
}

let s = new Queue()
let q = new Queue()
// VARIABLE PARA CAMBIAR LA CANTIDAD DE NUMEROS ALEATORIOS!
let can_aleatorios = 1000
//ARRIBA! ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let cont = 0

//Tiempo
var start = new Date().getTime()

//3n^2+n

for(let i = 0; i < can_aleatorios; i++){
let n = Math.floor(Math.random() * 10 *can_aleatorios)
  let aux = 0
  //ordenamiento
  while(aux == 0){
      if(n >= s.front()){
        q.enqueue(s.front())
        s.dequeue()
        cont += 3 //pasos
      }else{
        q.enqueue(n)
        cont++ //pasos
        while(s.size() > 0){
          q.enqueue(s.front())
          s.dequeue()
          cont += 3 //pasos
        }
        
        aux++
      }
  }
  
  while(q.size() > 0){
    s.enqueue(q.front())
    q.dequeue()
    cont += 3 //pasos
  }
}

//tiempo
var stop = new Date().getTime()
var elapsed = stop - start

console.log(s.toString())
console.log("Pasos: ", cont)
console.log("Tiempo: ", elapsed)