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
	    console.log("velda")
    return true	
	}else{ 
      console.log("no velda")
	    return false
	}
    }

    this.full= function() {
      if (this.dataStore.length == this.top){
        console.log("velda")
        return true
      } else {
        console.log("no velda")
        return false
      }
    }
}


let q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
q.enqueue("Pepito")
q.enqueue("Gloria")
q.enqueue("Justin")
q.empty()
q.full()
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

console.log('done')