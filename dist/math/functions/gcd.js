"use strict";

/**
 * @function gcd: Calculate the greatest common divisor among the two numbers using Euclidean's algorithm.
 * 
 * @param {*} numb1 
 * @param {*} numb2 
 */
var gcd = function gcd(numb1, numb2) {
    var temp = 0;
    while (numb1 !== 0) {
        temp = numb1;
        numb1 = numb2 % numb1;
        numb2 = temp;
    }
    return numb2;
};

module.exports = gcd;