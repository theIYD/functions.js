'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isIPAddress: String is an IP address.
 * @param {*} str 
 */
var isIPAddress = function isIPAddress(str) {
  string_util.isString(str);

  return regexpattern('ip').test(str);
};

module.exports = isIPAddress;