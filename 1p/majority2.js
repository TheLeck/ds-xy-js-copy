
//más de ⌊n/2⌋ veces, ordenados
let array = Array.from({length: 5}, () => Math.floor(Math.random() * 4)+1);
console.log("Los numeros son: " + array)
var v= 0
function numrep(num){
  var contnum = 1
  var unicnum = []
  var almacen = []
  num = num.sort()

  for(let i =0;i<num.length;i++){
    if(num[i+1]===num[i]){
      contnum++
      v++
    }else{
      unicnum.push(num[i])
      almacen.push(contnum)
      contnum = 1
      v+=2
    }
  }
  var valmax = Math.max(...almacen)
  var numrepetida = ""
  for(let i = 0;i<almacen.length;i++){
    if(almacen[i]=== valmax){
      numrepetida = unicnum[i]
      v++
    }else{
      v++
    }
  }
  if (valmax > Math.floor(array.length/2)){
    console.log ("El numero mas repetido es: " + numrepetida + " se repite: " + valmax + " veces")
  }else{
    console.log("No se cumple la condicion de: más de ⌊n/2⌋ veces")
  }
  console.log("Numero de pasos cuantificables: " + v)
}
numrep(array);