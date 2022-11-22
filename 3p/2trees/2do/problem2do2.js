//
// your solution here
//
// pick one:
// binary search tree
// ternary tree
// avl
// heap
// crear (constructor), agregar, eliminar, buscar
import BinarySearchTree from '../../../long/tree/binarySearchTree.js'
// aux
function printNode(value){
  console.log(value)
}

// crear arbol
var tree = new BinarySearchTree()
tree.insert(11) //key
// añadir elementos
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

// mostrar arbol
tree.inOrderTraverse(printNode)
// buscar
console.log(tree.search(1) ? '1 Encontrado' : '1 No encontrado')
console.log(tree.search(8) ? '8 Encontrado' : '8 No encontrado')
//Eliminar
tree.remove(8)
// comprobar si elimino
tree.inOrderTraverse(printNode)
console.log(tree.search(8) ? '8 Encontrado' : '8 No encontrado')