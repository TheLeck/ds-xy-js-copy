import Node from '../../../../long/linked/node6es.js'
import Linked from '../../5es/linked5es.js'

//

let n1 = new Node('a')
let n2 = new Node('b')
let n3 = new Node('b')
let n4 = new Node('f')

let l = new Linked(n1)
l.prepend(n2)
l.traverse()



l.insertAfter(n3, 'b')
l.traverse()
l.insertAfter(n4, 'b')
l.traverse()

l.insertBefore(new Node('c'),'f')
l.traverse()

//
//l.append(new Node('c'))
//l.traverse(l.getHead())

//
//l.prepend(new Node('d'))
//l.traverse(l.getHead())