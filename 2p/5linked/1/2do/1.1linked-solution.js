/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, or object
 * @returns {bool} - true or false, if value v exists or not,
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * PROBLEM 2
 * getTail()
 *
 * retrieve the node at the tail
 * @returns {Node} - Node at the tail or null if the list is empty
 *
 * @example
 * getTail()
 *
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
import Node from '../../../../long/linked/node6es.js'
import Linked from '../../../../long/linked/linked.js'


let n1=new Node('a')
let n2=new Node('b')

let l=new Linked(n1)
l.traverse(l.getHead())

l.prepend(n2)
l.traverse(l.getHead())

//
l.append(new Node('c'))
l.traverse(l.getHead())

if(l.contains('c')){
  console.log("encontrado")
}