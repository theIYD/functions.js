"use strict";

/**
 * @function Search an element using linear search technique
 * @param {*} arr 
 * @param {*} elem 
 */
var linearSearch = function linearSearch(arr, elem) {
  var temp = 0;
  arr.forEach(function (val, index) {
    if (val === elem) temp = index;else temp = -1;
  });

  return temp;
};

module.exports = linearSearch;