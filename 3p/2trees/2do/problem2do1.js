//
// your binary tree solution here
//
import treeNode from '../../../long/tree/tree.js'

/* ============|Demo example|==========
                    [root]
                    /     \
                  [a]    [b] 
                  / \     / \
               [c]  [d] [e] [f]
                /\   /\     /\  
             [g][h][i][j] [k][l]
            Visual representation
*/

const root = new treeNode('root');
const a = new treeNode('a');
const b = new treeNode('b');
const c = new treeNode('c');
const d = new treeNode('d');
const e = new treeNode('e');
const f = new treeNode('f');
const g = new treeNode('g');
const h = new treeNode('h');
const i = new treeNode('i');
const j = new treeNode('j');
const k = new treeNode('k');
const l = new treeNode('l');

root.appendLeft(a);
b.prependRigth(root);
c.linkLeft(a,c);
a.linkRigth(a,d);
b.appendLeft(e);
b.appendRigth(f);
g.prependLeft(c);
h.prependRigth(c);
d.appendLeft(i);
d.appendRigth(j);
e.isLeaf(); //true
f.linkLeft(f,k);
f.linkRigth(f,l);
console.log(root)