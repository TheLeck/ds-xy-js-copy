// imprime los 11 primeros elementos de la sucesión de Fibonacci

var n1=0,n2=1,sum
console.log(n1); console.log(n2)
for(let i = 0; i < 9; i++){
  sum = n1 + n2
  console.log(sum)
  n1 = n2
  n2 = sum
}