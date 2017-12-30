"use strict";

/**
 * @function Sort an array using bubble sort technique
 * @param {*} arr 
 */
var bubbleSort = function bubbleSort(arr) {
    var is_sorted = false,
        temp = void 0;
    while (!is_sorted) {
        is_sorted = true;
        arr.forEach(function (val, index) {
            if (arr[index] && arr[index + 1] && arr[index] > arr[index + 1]) {
                var _ref = [arr[index + 1], arr[index]];
                arr[index] = _ref[0];
                arr[index + 1] = _ref[1];

                is_sorted = false;
            }
        });
    }
    return arr;
};

module.exports = bubbleSort;