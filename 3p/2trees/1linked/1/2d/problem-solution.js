//
// add two nodes
// call preorder
// 

import preorder from '../preorder.js'
import Node from '../../../../../long/tree/node.js'
// -----------------------------------------------------------------

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)
let q1 = new Node('a')
let q2 =new Node('b')
p.left = o1
p.right = o2
o2.left = q1
o2.right = q2

preorder(p)