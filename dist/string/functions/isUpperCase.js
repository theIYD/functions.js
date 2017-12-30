'use strict';

var string_util = require('./util/isString');

/**
 * @function isUpperCase: String is all upper-cased.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
var isUpperCase = function isUpperCase(str) {
    string_util.isString(str);

    return str === str.toUpperCase();
};

module.exports = isUpperCase;