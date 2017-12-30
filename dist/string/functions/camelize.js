'use strict';

var string_util = require('./util/isString');

/**
 * @function Camelize a string i.e CamelCase
 * @param {*} str 
 */
var camelize = function camelize(str) {
    string_util.isString(str);
    return str.replace(/\s(.)/g, function (val) {
        return val.toUpperCase();
    }).replace(/\s/g, '').replace(/^(.)/, function (val) {
        return val.toLowerCase();
    });
};

module.exports = camelize;