// imprime los 11 primeros números primos
var n=1, num=0, x=1,cont=0, aux =1;
while(aux<=11){
  num++
  x=1
  cont=0
  while(x<=num){
    if(num%x == 0){
      cont++
    }
    x++
  }
  if(cont == 2){
    console.log(n)
    aux++
  }n++
}

//console.log("2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31")