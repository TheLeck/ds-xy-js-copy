// imprime el número de múltiplos de 7 en el rango [200-300] (¿cuantos?)

var n = 0, k = 0;

for (i = 200; i < 300; i++) {
  if (i % 7 === 0) {
    n++;
  }
  k++;
}
console.log("La cantidad de primos es: " + n);
console.log('Repeticiones: ' + k);