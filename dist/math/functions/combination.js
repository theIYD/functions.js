'use strict';

var factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple combination 
 * @param {*} number 
 * @param {*} rep 
 */
var combination = function combination(number, rep) {
  return factorial(number) / (factorial(rep) * factorial(number - rep));
};

module.exports = combination;