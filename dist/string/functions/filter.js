"use strict";

/**
 * @function Filter out falsy values from an array
 * @param {*} arr 
 */
var filterFalsy = function filterFalsy(arr) {
    return arr.filter(function (val) {
        if (val !== false || val !== null || val !== 0 || val !== "") {
            return val;
        }
    });
};

/**
 * @function Filter out an element from an array
 * @param {*} arr 
 * @param {*} elem 
 */
var filter = function filter(arr, elem) {
    return arr.filter(function (val) {
        return val === elem ? val : null;
    });
};

module.exports = { filterFalsy: filterFalsy, filter: filter };