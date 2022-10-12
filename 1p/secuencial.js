//10e3, 10e4, 10e5, sin ordenar, tomar/mostrar pasos

sequentialSearch = function(item){
  for (var i=0; i<array.length; i++){ //{1}
    if (item === array[i]){ //{2}
      return i; //{3}
    }
    k++
  }
  return -1; //{4}
};

// <-- Aqui cambiar elo valor de 10e3 por los valores 10e4 y 10e5 -->
let array = Array.from({length: 10e3}, () => Math.floor(Math.random() * 10e3))
var x = 4, k=0
console.log("Numeros desordenados: ")
console.log(array)
var aux = sequentialSearch(x)
if (aux === -1){
  console.log("El numero no fue encontrado.")
}else{
  console.log("El numero: " + x + " se encuentra en la posicion: " + aux)
}
console.log("Numero de pasos: " + k)