function findSimpleNumbers (n) {

  const arr = [];
  for (let i = 2; i < n; i++){
    arr[i] = true;
  }

  let p = 2;

  while (p * p < n) {

    for (let i = p * 2; i < n; i += p) {
      arr[i] = false;
      console.log(i);
    }

    for (let i = p + 1; i < n; i++) {
      if (arr[i]){
        p = i;
        break
      }
    }
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i]) console.log(i);
  }

  console.log(sum);
}

findSimpleNumbers(100);

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++){
    currentSum += arr[i];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
}

function getMaxSubSumTwo (arr){
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++){
      currentSum += arr[j];
      if (currentSum > maxSum) maxSum = currentSum;
    }
  }

  return maxSum;
}

var arr = [5, 2, 1, -10, 8];

function sortReverse (arr){
  arr.sort((a, b) => a - b);
  arr.reverse();
}

sortReverse(arr)
console.log(arr);

function sortCopy (arr) {
  let newArr = arr.slice(0);
  newArr.sort();
  return newArr;
}

const arrchick = ["HTML", "JavaScript", "CSS"];

console.log(sortCopy(arrchick));
console.log(arrchick)

const arrr = [1, 2, 3, 4, 5];

arrr.sort( (a,b) => {
  console.log(a, '  ', b, ' ', randomNumbers(a + b, a - b))
  return a - randomNumbers(a + b, a - b);
});

function randomNumbers (max, min) {
  return Math.random() * (max - min) + min;
}
console.log(arrr);

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort( (a, b) => {
  return a.age - b.age;
});

console.log(people);

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList (list) {
  while (list !== null) {
    console.log(list.value);
    list = list.next;
  }
}

function printListRec (list) {
  console.log(list.value);
  if (list.next) printListRec(list.next)
}

function printListReverse (list) {
  const items = [];

  while (list !== null) {
    items.push(list.value);
    list = list.next;
  }

  items.reverse();
  console.log(items)
}

function printListRecReverse (list) {
  if (list.next) printListRecReverse(list.next)
  console.log(list.value);
}

printList(list);
printListRec(list);
printListReverse(list);
printListRecReverse(list);

var arrAnagtam = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// function aclean(arr) {
//   let objects = [];
//   for (let i = 0; i < arr.length; i++){
//     let letters = arr[i].toLowerCase().split('').sort().join('');
//     objects.push(letters);
//   }
//   let stack = {};
//   for (let i = 0; i < arr.length; i++){
//     if (stack[objects[i]]) {
//       arr.splice(i, 1);
//       i--;
//     } else {
//       stack[objects[i]] = objects[i];
//     }
//   }
//
//   return arr;
// }




function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    let letters = arr[i].toLowerCase().split('').sort().join('');
    obj[letters] = arr[i];
  }
  const arrTwo = [];
  for (let key in obj) {
    arrTwo.push(obj[key]);
  }

  return arrTwo;
}

console.log(aclean(arrAnagtam));


function unique(arr) {
  let arraychik = []
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    if (!obj[arr[i]]) {
      obj[arr[i]] = arr[i];
      arraychik.push(arr[i]);
    }
  }
  return arraychik;
}



var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings));


arr = ["Есть", "жизнь", "на", "Марсе"];
arrLengths = arr.map((a) => a.length);
console.log(arrLengths);

arr = [ 1, 2, 3, 4, 5 ]

function getSums(arr) {

  let result = [];
  if (!arr.length) return result;
  let totalSum = arr.reduce( (sum, item) => {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum)
  return result;
}

console.log(getSums(arr));