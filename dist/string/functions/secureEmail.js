'use strict';

var string_util = require('./util/isString');

/**
 * @function Secures your email using asterisks
 * @param {String} str - a string
 * @returns {String} 
 */
var secureEmail = function secureEmail(str) {
    string_util.isString(str);
    var str1 = void 0,
        temp = void 0,
        asterisks = void 0;
    str1 = str.split("@");
    asterisks = str1[0].length - str1[0].length * 0.8;
    temp = str1[0].substring(0, Math.floor(asterisks));

    return '' + temp + '*'.repeat(str1[0].split("").length - asterisks) + '@' + str1[1];
};

module.exports = secureEmail;