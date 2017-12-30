"use strict";

/**
 * @function Collatz Algorithm
 * @param {*} number 
 */
var collatz = function collatz(number) {
  return number % 2 == 0 ? number / 2 : 3 * number + 1;
};

module.exports = collatz;