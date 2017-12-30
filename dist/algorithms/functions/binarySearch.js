"use strict";

/**
 * @function Search an element using binary search tehcnique
 * @param {*} arr 
 * @param {*} elem 
 */
var binarySearch = function binarySearch(arr, elem) {
  var upperBound = arr.length,
      lowerBound = 0,
      mid = Math.ceil((upperBound - lowerBound) / 2);

  while (elem !== arr[mid]) {
    if (mid === 0 || mid === upperBound) {
      return -1;
    }
    if (elem < arr[mid]) {
      upperBound = mid;
      mid -= Math.ceil((upperBound - lowerBound) / 2);
    } else {
      lowerBound = mid;
      mid += Math.ceil((upperBound - lowerBound) / 2);
    }
  }
  return mid;
};

module.exports = binarySearch;