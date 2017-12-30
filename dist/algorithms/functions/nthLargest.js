"use strict";

/**
 * @function Find the nth largest number from an unsorted array
 * @param {*} arr 
 * @param {*} nth 
 */
var nthLargest = function nthLargest(arr, nth) {
  var large = arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
  return nth === 1 ? +large : nthLargest(arr, nth - 1);
};

module.exports = nthLargest;