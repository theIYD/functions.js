"use strict";

/**
 * @function Reverse an array
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var reverse = function reverse(arr) {
  var len = arr.length;
  return arr.map(function () {
    return arr[--len];
  });
};

module.exports = reverse;