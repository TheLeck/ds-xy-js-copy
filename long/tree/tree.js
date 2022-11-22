export default
function treeNode(n){
    this.data = n;
    this.parent = null;
    this.left = null;
    this.rigth = null;

    this.appendLeft = appendLeft;
    this.appendRigth = appendRigth;
    this.prependLeft = prependLeft;
    this.prependRigth = prependRigth;
    this.linkLeft = linkLeft;
    this.linkRigth = linkRigth;

    this.isLeaf = isLeaf;
    this.isRoot = isLeaf;
    this.hasChildren = hasChildren;
}

function appendLeft(l){
    this.left? this.left.parent = null: '';
    this.left = l;
    l.parent = this;
}

function appendRigth(r){
    this.rigth? this.rigth.parent = null: '';
    this.rigth = r;
    r.parent = this;
}

function prependLeft(n){
    n.left? n.left.parent = null:'';
    n.left = this;
    this.parent = n;
}

function prependRigth(n){
    n.rigth? n.rigth.parent = null: '';
    n.rigth = this;
    this.parent = n;
}

function linkLeft(n , l){
    n.left? n.left.parent = null:'';
    n.left = l;
    l.parent = n;
}

function linkRigth(n , r){
    n.rigth? n.rigth.parent = null: '';
    n.rigth = r;
    r.parent = n;
}

function isLeaf (){
    return this.rigth === null && this.left === null;
}

function isRoot (){
    return this.parent === null;
}

function hasChildren(){
    return !this.isLeaf;
}
