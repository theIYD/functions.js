'use strict';

var string_util = require('./util/isString');

/**
 * @function Count the number of vowels in a string
 * @param {String} str - a string
 * @returns {Number}
 */
var countVowels = function countVowels(str) {
    string_util.isString(str);
    var vowels = 'aeiouAEIOU',
        count = 0;
    str = str.trim().split("");
    str.forEach(function (val) {
        if (vowels.indexOf(val) !== -1) count++;
    });
    return count;
};

module.exports = countVowels;