'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isDataURI: String is a data uri format.
 * @param {*} str 
 */
var isDataURI = function isDataURI(str) {
  string_util.isString(str);
  return regexpattern('dataURI').test(str);
};

module.exports = isDataURI;