var v=0

var swap = function(array, index1, index2){
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
  v+=3
};

function bubbleSort() {
  var length = array.length; //{1}
  for (var i = 0; i < length; i++) { //{2}
    for (var j = 0; j < length - 1; j++) { //{3}
      if (array[j] > array[j + 1]) { //{4}
        v++
        swap(array, j, j + 1); //{5}
      }else{ v++ }
    }  v++
  }
};

//var array = [1,5,4,2,3]; //{7}
let array = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
console.log("Numeros desordenados: " + array.toString()); //{8}
//tiempo
var start = new Date().getTime();
//funcion
bubbleSort(); //{9}
//tiempo
var stop = new Date().getTime();
var elapsed = stop - start;
//muestra
console.log("Numeros ordenados: " + array.toString()); //{10}
console.log("Pasos para ordenamiento: " + v)
console.log("The elapsed time was: " + elapsed + " milliseconds.")
