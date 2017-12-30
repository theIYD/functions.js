"use strict";

/**
 * @function Remove leading and trailing zeroes from an array
 * @param {*} arr 
 */
var trailingAndLeading = function trailingAndLeading(arr) {
  return arr.join("").replace(/^0+(\d)|(\d)0+$/gm, '$1$2');
};

module.exports = trailingAndLeading;