function sumToOne (n){
  let result = 0;
  for (let i = 0; i <= n; i++){
    result += i;
  }
  return result;
}

console.log(sumToOne(4));

function sumToTwo(n) {
  if (n != 1){
    return n + sumToTwo(n-1);
  } else {
    return 1;
  }
}

console.log(sumToTwo(3));

function sumToThree(n) {
  return ((1 + n)/2) * n;
}

console.log(sumToThree(5));

function factorial(n) {
  if (n == 1) return 1
  return n * factorial(n-1);
}

console.log(factorial(5));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++){
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(77));