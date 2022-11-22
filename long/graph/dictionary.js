export default
function Dictionary(){
  var items = {}
  
  this.has = function(key){
    return key in items
  }
  this.set = function(key,value){
    items[key] = value 
  }
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined
  }
  this.delete = function(key){
    if (this.has(key)){
      delete items[key]
      return true
    }
    return false
  }
  this.eso = function(){console.log(items)}
}