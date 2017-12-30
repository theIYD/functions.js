"use strict";

/**
 * @function Sort an array using the selection sort technique
 * @param {Array} arr - an array
 * @returns {Array} 
 */
var selectionSort = function selectionSort(arr) {
    for (var index = 0; index < arr.length; index++) {
        var minimum = index;

        for (var j = index + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) minimum = j;
        }
        if (index !== minimum) {
            ;
            var _ref = [arr[minimum], arr[index]];
            arr[index] = _ref[0];
            arr[minimum] = _ref[1];
        }
    }
    return arr;
};

module.exports = selectionSort;