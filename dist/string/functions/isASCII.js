'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isASCII: String contains ASCII characters
 * @param {String} str - a string
 * @returns {Boolean} 
 */
var isASCII = function isASCII(str) {
  var regex = regexpattern('ascii');

  string_util.isString(str);
  return regex.test(str);
};

module.exports = isASCII;