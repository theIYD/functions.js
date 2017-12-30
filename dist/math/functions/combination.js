'use strict';

var factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple combination 
 * @param {Number} number - a number
 * @param {Number} rep - repitition
 * @returns {Number}
 */
var combination = function combination(number, rep) {
  return factorial(number) / (factorial(rep) * factorial(number - rep));
};

module.exports = combination;