'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isHexColor: String is a hex color.
 * @param {*} str 
 */
var isHexColor = function isHexColor(str) {
    var hex = regexpattern('hexcolor');

    string_util.isString(str);
    return hex.test(str);
};

module.exports = isHexColor;