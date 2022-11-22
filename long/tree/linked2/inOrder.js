export default
function inorder(n){
  if (n!==null){ // (n) -- Exists
    inorder(n.left) //r
    console.log(n.key)
    inorder(n.right) //l
  }
}