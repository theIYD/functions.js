'use strict';

var factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple permutation 
 * @param {*} number 
 * @param {*} rep 
 */
var permutation = function permutation(number, rep) {
  return factorial(number) / factorial(number - rep);
};

module.exports = permutation;