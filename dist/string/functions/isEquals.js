'use strict';

var string_util = require('./util/isString');

/**
 * @function isEquals: Compares the two strings entered
 * @param {*} str 
 * @param {*} elem 
 */
var isEquals = function isEquals(str, elem) {
  string_util.isString(str);
  return str === elem;
};

module.exports = isEquals;