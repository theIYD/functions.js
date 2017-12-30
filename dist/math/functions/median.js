"use strict";

/**
 * @function Calculate median of a sorted number array
 * @param {*} arr 
 */
var median = function median(arr) {
    var median = void 0;
    arr.sort(function (a, b) {
        return a - b;
    });
    if (arr.length % 2 === 0) median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;else median = arr[arr.length / 2];
    return median;
};

module.exports = median;