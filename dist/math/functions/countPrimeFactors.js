"use strict";

/**
 * @function countPrimeFactors: A function to count all prime factors of a given number
 * @param {*} n 
 */
var countPrimeFactors = function countPrimeFactors(n) {
    var count = 0;
    while (n % 2 == 0) {
        n = n / 2;
        count++;
    }
    for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
        while (n % i == 0) {
            n = n / i;
            count++;
        }
    }
    if (n > 2) count++;
    return count;
};

module.exports = countPrimeFactors;