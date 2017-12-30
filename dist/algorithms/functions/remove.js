"use strict";

/**
 * @function Remove an element from an array
 * @param {Array} arr - an array 
 * @param {Element} elem - an element
 * @returns {Array}
 */
var remove = function remove(arr, elem) {
  arr.forEach(function (num, i) {
    if (num === elem) arr.splice(i, 1);
  });
  return arr;
};

module.exports = remove;