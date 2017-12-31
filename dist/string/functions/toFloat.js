'use strict';

var string_util = require('./util/isString');

/**
 * @function Parse string to float value
 * @param {String} str - a string
 * @returns {Number} 
 */
var toFloat = function toFloat(str) {
  string_util.isString(str);
  return parseFloat(str);
};

module.exports = toFloat;