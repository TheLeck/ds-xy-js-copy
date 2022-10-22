/** 
 *
 * your solution here
 *
 */

function Queue() {
    this.dataStore = []
    this.top = 5

    this.enqueue= function(element) {
      if (this.dataStore.length == this.top){
        console.log("Fila llena")
      } else {
        this.dataStore.push(element)
      }
    }

    this.dequeue= function() {
      if (this.dataStore.length == 0){
        console.log("Fila vacia")
      } else {
        return this.dataStore.shift()
      }
	
    }

    this.front= function() {
	return this.dataStore[0]
    }

    this.back= function() {
	return this.dataStore[this.dataStore.length-1]
    }

    this.toString= function() {
	let retStr = ""
	for (let i = 0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	}
	return retStr
    }

    this.empty= function() {
	if (this.dataStore.length == 0){
    return true	
	}else{ 
	    return false
	}
    }

    this.full= function() {
      if (this.dataStore.length == this.top){
        return true
      } else {
        return false
      }
    }
}


let q = new Queue()

if(q.empty()){console.log("Vacia (Con empty)")}
if(q.full()){console.log("Fila llena (Con full)")}

console.log("\n Comienza llenado")
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
q.enqueue("Pepito")
q.enqueue("Gloria")
q.enqueue("Justin")
console.log(" Termina llenado \n")

if(q.empty()){console.log("Vacia (Con empty)")}
if(q.full()){console.log("Fila llena (Con full)")}

console.log(q.toString())

console.log("Front of queue: " + q.front())
console.log("Back of queue: " + q.back())

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.toString())

console.log("done")