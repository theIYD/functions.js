'use strict';

var gcd = require('./gcd');

/**
 * @function Calculate LCM of an array of numbers
 * @param {Array} arr - an array
 * @returns {Number} 
 */
var lcm = function lcm(arr) {
    return arr.reduce(function (a, b) {
        return a * b / gcd(a, b);
    });
};

module.exports = lcm;