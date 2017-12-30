'use strict';

var string_util = require('./util/isString');

/**
 * @function Remove tags from an HTML statement
 * @param {String} str - a string
 * @returns {String} 
 */
var removeTags = function removeTags(str) {
  string_util.isString(str);
  str = str.toString();
  return str.replace(/<[^>]*>/g, '');
};

module.exports = removeTags;