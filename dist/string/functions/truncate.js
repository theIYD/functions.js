"use strict";

var string_util = require('./util/isString');

/**
 * @function Truncate a string at provided position 
 * @param {*} str 
 * @param {*} pos 
 */
var truncate = function truncate(str, pos) {
  string_util.isString(str);
  return str.split(" ").splice(0, pos).join(" ");
};

module.exports = truncate;