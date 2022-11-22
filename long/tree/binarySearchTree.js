import Node from './node.js'

export default
class BinarySearchTree {
   constructor(){
    this.root = null
  }
  
  insertNode(node, newNode){
    if (newNode.key < node.key){ 
      if (node.left === null){ 
        node.left = newNode 
      } else {
        this.insertNode(node.left, newNode) 
      }
    } else {
        if (node.right === null){
        node.right = newNode 
      } else {
        this.insertNode(node.right, newNode) 
      }
    }
  }
  insert(key){
    var newNode = new Node(key) 
    if (this.root === null){ 
      this.root = newNode
    } else {
      this.insertNode(this.root,newNode) 
    }
  }
  
  // Busacar ---------------------------------------------------
  search(key){
    return this.searchNode(this.root, key) 
  }
  searchNode(node, key){
    if (node === null){ 
      return false
    }
    if (key < node.key){ 
      return this.searchNode(node.left, key) 
    } else if (key > node.key){ 
      return this.searchNode(node.right, key) 
    } else {
      return true 
    }
  }
  
  //Eliminar -----------------------------------------------------
  remove(key){ this.root = this.removeNode(this.root, key) } 
  findMinNode(node){ //AUX FINAL
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  removeNode(node, key){
    if (node === null){ 
      return null
    }
    if (key < node.key){  //ES MENOR
      node.left = this.removeNode(node.left, key) 
      return node 
    } else if (key > node.key){ //ES MAYOR
      node.right = this.removeNode(node.right, key) 
      return node 
    } else { // key is equal to node.key
    //case 1 - a leaf node
    if (node.left === null && node.right === null){ 
      node = null 
      return node 
    }
    //case 2 - a node with only 1 child
    if (node.left === null){ 
      node = node.right 
      return node 
    } else if (node.right === null){ 
      node = node.left 
      return node 
    }
    //case 3 - a node with 2 children
    var aux = this.findMinNode(node.right) 
    node.key = aux.key 
    node.right = this.removeNode(node.right, aux.key) 
    return node 
    }
  }

  // IN ORDER ----------------------------------------------------
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root, callback) 
  }
  inOrderTraverseNode(node, callback) {
    if (node !== null) { 
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key) 
      this.inOrderTraverseNode(node.right, callback) 
    }
  }
  
}