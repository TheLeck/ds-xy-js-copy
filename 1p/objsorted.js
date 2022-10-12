//  agregar 10e3 pares (llave:valor) a un objeto; extraer y ordenar llaves; crear nuevo objeto de pares
var obj = { }
for (let i = 0; i < 10e3; i++) {
  let name = 'name' + Math.floor(Math.random() * 10e3)
  obj[name] = name
}
//function(a, b){return a - b}
// (p,q)=>p<q?-1:p>q?1:0

function removeCharCallback(match, replaceString, offset, string) {
    return "";
}
//separar name de los numeros y ordenar numeros
var keys = Object.keys(obj).toString()
var array = keys.split(',name')
aux = keys.split('name')
//aux[1] = aux[1].replace(/(,)/gm, removeCharCallback)
array[0] = aux[1]
array.sort(function(a, b){return a - b})

//hacer la cracion del nuevo obj
var obj2 = { }, values = Object.entries(obj), j = 0

for (let i = 0; i < array.length; i++) {
  let name = 'name' + array[i]
  //console.log(name)
  for(let j= 0; j<values.length; j++){
    if (name === values[j][0]){
      obj2[name] = values[j][1]
      //console.log(values[j][1])
    }
  }
}
console.log("Objeto sin ordenar: ")
console.log(obj)
//console.log(keys)
console.log("Objeto ordenado: ")
console.log(obj2)




console.log(Object.values(obj).length)