// const calculator = {
//   promptOne: null,
//   promptTwo: null,
//   read: function () {
//     this.promptOne = +prompt('a?', 0);
//     this.promptTwo = +prompt('b?', 0);
//   },
//   sum: function () {
//     return this.promptTwo + this.promptOne;
//   },
//   multiply: function () {
//     return this.promptTwo * this.promptOne;
//   }
// };
//
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());

const ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    console.log( this.step );
    return this;
  }
};

ladder.up().up().up().showStep().down().showStep()
