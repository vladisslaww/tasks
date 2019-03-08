// function checkP (string) {
//   if (string.length % 2 !== 0) {
//     return false;
//   }
//
//   let brackets = {
//     "[": "]",
//     "{": "}",
//     "(": ")"
//   };
//
//   const keys = Object.keys(brackets);
//   const vals = keys.map(key => brackets[key]);
//
//   const original = string.split("");
//   const reverse = original.reverse();
//
//   for (let i = 0; i < original.length, i++){
//     let char = original[i];
//
//
//   }
// }
//
// checkP('{}()[]');

function isValid(str) {
  if (str.length <= 1 || str.length % 2 !== 0) return false;
  let matchingOpeningBracket, ch;
  let stack = [];

  let closingBrackets = {
    ']': '[',
    '}': '{',
    ')': '('
  };
  let openingBrackets = {
    '[': ']',
    '{': '}',
    '(': ')'
  };

  for(let i = 0; i < str.length; i++) {
    ch = str[i];
    if (closingBrackets[ch] && ) {

    }
  }

}

console.log(isValid('{}}{'));
console.log(isValid('{}[]'));
console.log(isValid('({}[])'));


let brackets = {
  "[": "]",
  "{": "}",
  "(": ")",
  "<": ">"
};

function correctBrackets (str) {
  const keys = Object.keys(brackets);
  const vals = keys.map(key => brackets[key]);
  console.log(vals);

  console.log(keys)

  if (vals.indexOf(str[0]) + 1 || str.length % 2 !== 0){
    return null;
  }

  let mass = str.split('');
  console.log(mass)
  let stack = [];

  for (let i = 0; i < mass.length; i++) {
    const l = mass[i];

    if (keys.indexOf(l) + 1){
      stack.push(l);
    } else {
      if (stack.length){
        mass[i] = brackets[stack.shift()];
      } else {
        return null;
      }
    }
    console.log(stack);
  }

  if(stack.length) return null;
  return mass.join('');
}

console.log(correctBrackets('(]{}{{{(())]])'));