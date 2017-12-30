"use strict";

var string_util = require('./util/isString');
/**
 * @function to Snake Case
 * @param {String} str - a string 
 * @returns {String}
 */
var snakeCase = function snakeCase(str) {
  string_util.isString(str);
  return str.indexOf(" ") !== -1 ? str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '_').toLowerCase() : str.replace(/([A-Z])/g, function ($1) {
    return "_" + $1.toLowerCase();
  });
};

module.exports = snakeCase;