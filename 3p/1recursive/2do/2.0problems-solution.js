// 1. fibonacci
function aux(n){
  if(n<2){return n}
  return aux(n-2) + aux(n-1)
}

function fib (a){
  if(a <= 0){
    return
  } else {
    console.log(aux(a))
    fib(a-1)
  }
}

fib(10)

// 2. power
function power(b,p){
  if(p <= 1 && p >= 0){return b}
  if(p <= 0){
    return
  } else {
    return b*power(b,(p-1))
  }
}

console.log(power(5,3))

// 3. factorial
function factorial(n){
  if(n == 0){return 1}
  if(n <= 0){
    return
  }else{
    return n* factorial(n-1)
  }
}
console.log(factorial(3))