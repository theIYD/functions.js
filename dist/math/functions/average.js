'use strict';

/**
 * @function average: Calculates the average of an array
 * @param {*} arr 
 */
var average = function average(arr) {
    var temp = 0,
        average = void 0;
    if (Array.isArray(arr)) {
        temp = arr.reduce(function (previous, current) {
            return current += previous;
        });
        average = temp / arr.length;
        return average;
    } else {
        throw new Error('error occured');
    }
};

module.exports = average;