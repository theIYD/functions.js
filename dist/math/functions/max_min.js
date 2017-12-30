'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @function maxOrmin: Get maximum or minimum of an array
 * @param {Array} arr 
 * @param {String} task
 * @returns {Number} 
 */
var maxOrMin = function maxOrMin(arr, task) {
    if (task) {
        if (task.toUpperCase() === 'MAX') {
            return Math.max.apply(Math, _toConsumableArray(arr));
        } else if (task.toUpperCase() === 'MIN') {
            return Math.min.apply(Math, _toConsumableArray(arr));
        } else {
            throw new Error('Error occured');
        }
    } else {
        throw new Error('max or min not defined');
    }
};

module.exports = maxOrMin;