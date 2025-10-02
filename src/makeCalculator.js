'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(fun, num) {
      this.result = fun.call(this, num);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(num) {
      return this.result + num;
    },
    subtract(num) {
      return this.result - num;
    },
    multiply(num) {
      return this.result * num;
    },
    divide(num) {
      return this.result / num;
    },
  };
}

module.exports = makeCalculator;
