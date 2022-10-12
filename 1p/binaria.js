//10e3, 10e4, 10e5, ordenados, tomar/mostrar pasos
// <-- Aqui cambiar elo valor de 10e3 por los valores 10e4 y 10e5 -->
let array = Array.from({length: 10e3}, () => Math.floor(Math.random() * 10e3))
let k= 0
console.log('Numeros sin ordenar:')
console.log(array)

array = array.sort(function(a, b){return a - b})
console.log('Numeros ordenados:')
console.log(array)

busbin = function(item){
  //array.sort();
  let low = 0,
    high = array.length - 1,
    mid, element
  while (low <= high){
    mid = Math.floor((low + high)/2); k++
    element = array[mid]
    if (element < item){
      low = mid + 1; 
    } else if (element > item){
      high = mid - 1; 
    } else {
      return mid
      return -1
    }
  }
}
x=4;
console.log('Buscando: ' + x)
console.log('Pocicion en el arreglo ordenado: ' + busbin(x))
console.log('Pasos cuantificables: ' + k)