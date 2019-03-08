function sum(a) {
  let cache = a;
  function increment (b){
    cache += b;
    return increment
  }
  increment.toString = function(){
    return cache
  };

  return increment;
}

let b = sum(1)(3)(5);
console.log(b)
