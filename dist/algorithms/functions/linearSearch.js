"use strict";

/**
 * @function Search an element using linear search technique
 * @param {Array} arr - an array
 * @param {Element} elem - an element
 * @returns {Number}
 */
var linearSearch = function linearSearch(arr, elem) {
  var temp = 0;
  arr.forEach(function (val, index) {
    if (val === elem) temp = index;else temp = -1;
  });

  return temp;
};

module.exports = linearSearch;