'use strict';

var string_util = require('./util/isString');

/**
 * @function isPalindrome: String is a palindrome.
 * @param {*} str 
 */
var isPalindrome = function isPalindrome(str) {
    string_util.isString(str);
    var reverse = str.toLowerCase().replace(/[\W_]/g, '').split("").reverse().join("");

    return str.toLowerCase().replace(/[\W_]/g, '') === reverse;
};

module.exports = isPalindrome;