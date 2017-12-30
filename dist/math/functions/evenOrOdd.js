"use strict";

/**
 * @function Number is even or odd
 * @param {Number} number 
 * @returns {Boolean}
 */
var isEven = function isEven(number) {
    return number % 2 === 0;
};

var isOdd = function isOdd(number) {
    return number % 2 !== 0;
};

module.exports = {
    isEven: isEven,
    isOdd: isOdd
};