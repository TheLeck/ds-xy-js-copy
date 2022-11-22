//
// 
//
export default
function preorder(n){
  if (n!==null){ // (n) -- Exists
    console.log(n.key)
    preorder(n.left) //r
    preorder(n.right) //l
  }
}
