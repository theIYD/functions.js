"use strict";

/**
 * @function nthRoot: Calculates the nth root of a positive number
 * @param {Number} number - a number 
 * @param {Number} power 
 * @returns {Number}
 */
var nthRoot = function nthRoot(number, power) {
  return Math.pow(number, 1 / power);
};

module.exports = nthRoot;