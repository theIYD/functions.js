"use strict";

/**
 * @function Sort an array using the insertion sort technique
 * @param {*} arr 
 */
var insertionSort = function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var value = arr[i],
        j = void 0;
    j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }
  return arr;
};

module.exports = insertionSort;