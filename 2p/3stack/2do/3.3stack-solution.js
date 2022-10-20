class Stack {
    constructor(){
        this.data = []
        this.top = 5//stack size
    }

    push(o){//validate stack not full
        if (this.isFull())
            console.log('full stack')
        else{
            this.data.push(o)
            console.log(o,'added')
        }
    }

    peek(){
        return this.data[this.data.length-1]
    }

    pop(){//validate stack not empty
        if (this.isEmpty())
            console.log('empty stack')
        else
            console.log(this.data.pop(),'popped')
    }

    isEmpty(){
        if (this.data.length === 0)//this.size()
            return true
        else
            return false
    }

    isFull(){
        if (this.data.length === this.top)
            return true
        else
            return false
    }

    size(){
     return this.data.length
    }

    search(k){
      let cont = 0, ind = 0
      for (let i = 0;i<this.data.length;i++){
        if(this.data[i] == k){
          cont++
          ind = i
        }
      }
      if (cont != 0){
        console.log('Encontrado en la posicion: ', ind)
      }else{
          console.log('No encontrado')
      }
    }
  
    traverse(){}

    toString(){}
    makeEmpty(){
        this.data = []
    }
}

let s = new Stack()
s.push(4)
//s.search(4)
s.push(0)
s.push(3)
s.push(2)
s.push(1)
s.push(5)
console.log('size',s.size())
s.search(1)