function sum(a){
  return function (b) {
    return a+b;
  }
}
console.log(sum(8)(2));

function makeBuffer() {
  let a='';
  function buffer(){
    if (arguments[0]){
      a = `${a}${arguments[0]}`;
    } else {
      return a;
    }
  }

  buffer.clear = function () {
    a='';
  };

  return buffer
}

const buffer = makeBuffer();

buffer(123);
buffer('asdasf');
console.log(buffer());

buffer.clear();
buffer('asdf')
console.log(buffer());

const users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users.sort(byField('name'));

console.log(users);

users.sort(byField('age'));

console.log(users);

function byField (field){
  return function (a, b) {
    return a[field] > b[field] ? 1: -1;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func){
  let array = [];
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])) array.push(arr[i]);
  }

  return array
}

console.log(filter(arr, function (a) {
  return a > 3
}));

function inBetween(a, b){
  return function (x) {
    return x >= a && x <= b;
  }
}

console.log(filter(arr, inBetween(3, 9)));

function inArray(a){
  return function (b) {
    switch (a.indexOf(b)) {
      case -1: return false;
      case 0: return true;
      default: return true;
    }
  }
}

console.log(filter(arr, inArray([1,2,5,6])));

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function me() {
      console.log( me.i );
    };
    shooter.i = i
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();
army[3]();