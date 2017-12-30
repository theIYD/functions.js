"use strict";

/**
 * @function Reverse an array
 * @param {*} arr 
 */
var reverse = function reverse(arr) {
  var len = arr.length;
  return arr.map(function () {
    return arr[--len];
  });
};

module.exports = reverse;