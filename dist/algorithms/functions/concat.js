"use strict";

/**
 * @function Concatenates into a single array
 * @param {*} arrs 
 */
var concat = function concat() {
  for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
    arrs[_key] = arguments[_key];
  }

  var temp = [];
  arrs.forEach(function (arr) {
    return arr.forEach(function (val) {
      return temp.push(val);
    });
  });
  return temp;
};

module.exports = concat;