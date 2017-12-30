'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function String is an emoji
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isEmoji = function isEmoji(str) {
  string_util.isString(str);
  return regexpattern('emoji').test(str);
};

module.exports = isEmoji;