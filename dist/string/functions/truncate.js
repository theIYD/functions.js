"use strict";

var string_util = require('./util/isString');

/**
 * @function Truncate a string at provided position 
 * @param {String} str - a string
 * @param {Number} pos - position is array
 * @returns {String}
 */
var truncate = function truncate(str, pos) {
  string_util.isString(str);
  return str.split(" ").splice(0, pos).join(" ");
};

module.exports = truncate;