'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var string_util = require('./util/isString');

/**
 * @function String is a JSON object
 * @param {String} str
 * @returns {Boolean} 
 */
var isJSON = function isJSON(str) {
    string_util.isString(str);
    try {
        var obj = JSON.parse(str);
        return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
    } catch (e) {}
    return false;
};

module.exports = isJSON;