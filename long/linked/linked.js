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
  let c=this.head
  let cont = 0
  while(c){//exists
    if (k == c.data){
      cont++
    }
	  c=c.next
  }
  if(cont>0){
    //console.log('Encontrado')
    return true
  }else{
    //console.log('No encontrado')
    return false
  }
}

function insertAfter(n,aft){
      let c=this.head
    while(c){//exists
	if(aft == c.data){
    n.next = c.next
    c.next = n
    return true
  }
	c=c.next
    }
    console.log('\n')
}

function insertBefore(n,aft){
      let c=this.head
    while(c){//exists
	if(aft == c.next.data){
    n.next = c.next
    c.next = n
    return true
  }
	c=c.next
    }
    console.log('\n')
}