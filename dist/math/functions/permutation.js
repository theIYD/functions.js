'use strict';

var factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple permutation 
 * @param {Number} number - a number
 * @param {Number} rep - repitition
 * @returns {Number}
 */
var permutation = function permutation(number, rep) {
  return factorial(number) / factorial(number - rep);
};

module.exports = permutation;