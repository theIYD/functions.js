'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isHexaDecimal: String is hexadecimal.
 * @param {*} str 
 */
var isHexaDecimal = function isHexaDecimal(str) {
  string_util.isString(str);

  return regexpattern('hexdecimal').test(str);
};

module.exports = isHexaDecimal;