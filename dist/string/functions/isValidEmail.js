'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isValidEmail: String is a valid email id.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isValidEmail = function isValidEmail(str) {
  var regex = regexpattern('email');

  string_util.isString(str);
  return regex ? regex.test(str) : null;
};

module.exports = isValidEmail;