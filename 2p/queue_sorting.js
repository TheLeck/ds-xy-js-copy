class Stack {
    constructor() {
        this.data = []
        this.top = 0
        }
    push(o){
        this.data[this.top++] = o
    }
    pop(){
        return this.data[--this.top]
    }
    peek(){
        return this.data[this.top-1]
    }
    isEmpty(){
        if(this.top == 0){
            return true
        }else{ return false }
    }

}

class Queue {
  constructor(){
    this.dataStore = []
  }  
  enqueue (element) {
	  this.dataStore.push(element)
  }
  dequeue () {
	  return this.dataStore.shift()
  }

  front() {
	  return this.dataStore[0]
  }

  back() {
	  return this.dataStore[this.dataStore.length-1]
  }

  toString() {
	  let retStr = ""
	  for (let i = 0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	  }
	  return retStr
    }

  isEmpty() {
	  if (this.dataStore.length == 0){
	    return true	
	  }else{ 
	    return false
	  }
    }

  full() {}
}
let a = new Queue()
let b = new Stack()
// VARIABLE PARA CAMBIAR LA CANTIDAD DE NUMEROS ALEATORIOS!
let can_aleatorios = 10
//ARRIBA! ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let i= 0, num = 0, j = 0, cont = 0

//creacion de numeros
while(j< can_aleatorios){
    num = Math.floor(Math.random() * can_aleatorios *10)
    i = 0
    j++
    //ordenamiento
    while(i == 0){
        if (a.isEmpty() == true){
            a.enqueue(num)
            cont=cont +2 //pasos
            i++
            while(b.isEmpty() != true){
              a.enqueue(b.pop())
              cont = cont +3 //pasos
            }
        }else if (a.back() >= num) {
            a.enqueue(num)
            cont = cont +2 //pasos
            i++
            while(b.isEmpty() != true){
                a.enqueue(b.pop())
                cont = cont +3 //pasos
            }
        }else{
            b.push(a.dequeue())
            cont = cont +2 //pasos
        }
    }
}
console.log("hello")
console.log(a)