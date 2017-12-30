'use strict';

var string_util = require('./util/isString');

/**
 * @function Escape characters from string
 * @param {*} str 
 */
var escape = function escape(str) {
    string_util.isString(str);
    if (!str) {
        throw new Error('error');
    } else {
        var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return str.toString().replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }
};

module.exports = escape;