var v = 0
var swap = function(array, index1, index2){
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
  v+=3
};

function selectionSort () {
  var length = array.length, //{1}
  indexMin;
  for (var i=0; i<length-1; i++){ //{2}
    indexMin = i; //{3}
      for (var j=i; j<length; j++){ //{4}
        if(array[indexMin]>array[j]){ //{5}
          indexMin = j; //{6}
          v++
        }else{v++}
      }
    if (i !== indexMin){ //{7}
      swap(array, i, indexMin);
      v++
    }else{v++}
  } 
};

let array = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
console.log("Numeros desordenados: " + array.toString());
//tiempo
var start = new Date().getTime();
//funcion
selectionSort();
//tiempo
var stop = new Date().getTime();
var elapsed = stop - start;
//muestra
console.log("Numeros ordenados: " + array.toString());
console.log("Pasos para ordenamiento: " + v)
console.log("The elapsed time was: " + elapsed + " milliseconds.")