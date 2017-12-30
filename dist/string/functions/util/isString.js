'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(input) {
    if (!(typeof input === 'string' || input instanceof String)) {
        throw new TypeError('Enter String Only !');
    }
};

/**
 * Courtesy: https://github.com/chriso/validator.js/blob/master/src/lib/util/toString.js
 */
var convertString = function convertString(arg) {
    if (!input && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
        if (typeof arg.convertString === 'function') {
            arg = arg.convertString();
        } else {
            arg = '[object Object]';
        }
    } else if (arg === null || typeof arg === 'undefined' || !arg.length && isNaN(arg)) {
        arg = '';
    }

    return String(arg);
};

module.exports = { isString: isString, convertString: convertString };