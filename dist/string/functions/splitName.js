"use strict";

var string_util = require('./util/isString');

/**
 * @function splitName: Return the first name and the last name of a person's name.
 * @param {String} str - a string
 * @returns {Array}
 */
var splitName = function splitName(str) {
  string_util.isString(str);

  return str.split(" ");
};

module.exports = splitName;