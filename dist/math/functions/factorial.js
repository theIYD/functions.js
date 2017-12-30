"use strict";

/**
 * Method 1: Recursive Function
 * @function factorialRecursive: Print factorial of a number using recursive function approach
 * Time complexity is O(n).
 * @param {Number} n - a number
 * @returns {Number}
 */
var factorialRecursive = function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
};

/**
 * Method 2: Iterative 
 * @function factorialIterative: Print factorial of a number using iterative approach
 * @param {Number} n - a number
 * @returns {Number}
 * Time complexity is O(n).
 */
var factorialIterative = function factorialIterative(n) {
    var temp = 1,
        i = void 0;
    for (i = 2; i <= n; i++) {
        temp *= i;
    }
    return temp;
};

/**
 * Method 3: One line solution
 * @function factorialOneLine: Print factorial of a number using a ternary operator.
 * @param {Number} n - a number
 * @returns {Number}
 */
var factorialOneLine = function factorialOneLine(n) {
    return n === 1 || n === 0 ? 1 : n * factorialOneLine(n - 1);
};

/**
 * @function doubleFactorial: Print semi-factorial or double factorial of number using the iterative approach. 
 * 
 * Double factorial of a non-integer n is the product of all integers from 1 to n that have the same parity i.e odd or even
 * @param {Number} n - a number
 * @returns {Number}
 */
var doublefactorial = function doublefactorial(n) {
    var temp = 1;
    for (var i = n; i >= 0; i = i - 2) {
        if (i === 0 || i === 1) return temp;else temp *= i;
    }
};

/**
 * @function facCountTrailingZeroes: Print the count of trailing zeroes in n!
 * @param {Number} n - a number
 * @returns {Number}
 */
var factCountTrailingZeroes = function factCountTrailingZeroes(n) {
    var count = 0;
    for (var i = 5; n / i >= 1; i *= 5) {
        count += n / i;
    }
    return count;
};

module.exports = {
    factorialRecursive: factorialRecursive,
    factorialIterative: factorialIterative,
    factorialOneLine: factorialOneLine,
    doublefactorial: doublefactorial,
    factCountTrailingZeroes: factCountTrailingZeroes
};