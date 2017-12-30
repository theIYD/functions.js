"use strict";

/**
 * @function sumOfArray: Addition of all the integers in an array
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var sumOfArray = function sumOfArray(arr) {
  return arr.reduce(function (previous, current) {
    return current += previous;
  });
};

module.exports = sumOfArray;