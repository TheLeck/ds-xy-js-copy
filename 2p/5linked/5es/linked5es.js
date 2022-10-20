//
// imports ES5
// Node5es (data)
//
export default
function Linked(n) {//node
    this.head = n//node
    this.tail = n//node
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains
    this.insertAfter = insertAfter
    this.insertBefore = insertBefore
}

function getHead(){return this.head}

function prepend(n){//new node
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){//new node
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){//exists
	//console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

function contains(k){
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


function insertAfter(n,aft){
      let c=this.head
    while(c){//exists
	//console.log(c.key)
	if(aft == c.data){
    n.next = c.next
    c.next = n
    //console.log('fue igual')
    return true
  }
	c=c.next
    }
    console.log('\n')
}

function insertBefore(n,aft){
      let c=this.head
    while(c){//exists
	//console.log(c.key)
	if(aft == c.next.data){
    n.next = c.next
    c.next = n
    //console.log('fue igual')
    return true
  }
	c=c.next
    }
    console.log('\n')
}

