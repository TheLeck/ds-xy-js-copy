export default
function posorder(n){
  if (n!==null){ // (n) -- Exists
    posorder(n.left) //r
    posorder(n.right) //l
    console.log(n.key)
  }
}