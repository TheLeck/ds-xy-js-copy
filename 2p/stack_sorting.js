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

let a = new Stack()
let b = new Stack()
// VARIABLE PARA CAMBIAR LA CANTIDAD DE NUMEROS ALEATORIOS!
let can_aleatorios = 100
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
            a.push(num)
            cont=cont +2 //pasos
            i++
            while(b.isEmpty() != true){
              a.push(b.pop())
              cont = cont +3 //pasos
            }
        }else if (a.peek() >= num) {
            a.push(num)
            cont = cont +2 //pasos
            i++
            while(b.isEmpty() != true){
                a.push(b.pop())
                cont = cont +3 //pasos
            }
        }else{
            b.push(a.pop())
            cont = cont +2 //pasos
        }
    }
}
console.log(a)