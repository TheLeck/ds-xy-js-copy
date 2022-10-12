//Numero mas repetido en 5 numeros, hasta 4
//más de ⌊n/2⌋ veces, sin ordenar (fuerza bruta)
let array = Array.from({length: 5}, () => Math.floor(Math.random() * 4)+1);
var n = 0, n1=0,n2=0,n3=0,n4=0, v=0;

//mostar nuemros
console.log(array.toString());
//contar repeticiones
for (i = 0; i<array.length;i++){
  switch(array[i]){
    case 1:
      n1++;
      break;
    case 2:
      n2++;
      break;
    case 3:
      n3++;
      break;
    case 4:
      n4++;
      break;
  }
  v+=4;
}
//el mas grande de los repetidos
var aux = Math.max(n1,n2,n3,n4);
var p = Math.floor(array.length/2)
if (n1 == aux && aux > p){
  console.log("El numero mas repetido es el 1: "+ aux + " veces");
  v++;
}else if (n2 == aux && aux > p){
  console.log("El numero mas repetido es el 2: "+ aux + " veces");
  v+=2;
}else if (n3 == aux && aux > p){
  console.log("El numero mas repetido es el 3: "+ aux + " veces");
  v+=3;
}else if (n4 == aux && aux > p){
  console.log("El numero mas repetido es el 4: "+ aux + " veces");
  v+=4;
}else{
  console.log("No se cumple la condicion de: más de ⌊n/2⌋ veces")
}

console.log("El numero de pasos cuantificlabes es: " + v);