// imprime la sumatoria de los múltiplos de 7 en el rango [200-300]

var n = 0, k = 0;

for (i = 200; i < 300; i++) {
  if (i % 7 === 0) {
    n += i;
  }
  k++;
}
console.log("La sumatoria es: " + n);
console.log('Repeticiones: ' + k);