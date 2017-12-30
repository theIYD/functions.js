'use strict';

var string_util = require('./util/isString');

/**
 * @function Convert string to titleCase
 * @param {String} str - a string
 * @returns {String}
 */
var toTitleCase = function toTitleCase(str) {
  string_util.isString(str);
  return str.toString().replace(/\w\S*/g, function (text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
};

module.exports = toTitleCase;