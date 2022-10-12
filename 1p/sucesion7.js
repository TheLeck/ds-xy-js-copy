// imprime la sucesión de los múltiplos de 7 en el rango [200-300]

var k = 0;

for (i=200; i<300; i++){
  if(i%7 === 0){
    console.log(i);
  }
  k++;
}

console.log('Repeticiones: ' + k);