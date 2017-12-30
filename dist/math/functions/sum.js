"use strict";

/**
 * @function sumOfArray: Addition of all the integers in an array
 * @param {*} arr 
 */
var sumOfArray = function sumOfArray(arr) {
  return arr.reduce(function (previous, current) {
    return current += previous;
  });
};

module.exports = sumOfArray;