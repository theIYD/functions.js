'use strict';

var string_util = require('./util/isString');

/**
 * @function Unescape the string
 * @param {String} str - an escaped string
 * @returns {String} 
 */
var unescape = function unescape(str) {
    string_util.isString(str);
    return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
};

module.exports = unescape;