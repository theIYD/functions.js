"use strict";

/**
 * @function Remove duplicates from an array
 * @param {*} arr 
 */
var removeDuplicate = function removeDuplicate(arr) {
    var exists = {},
        output = [];
    arr.forEach(function (val) {
        if (!exists[val]) {
            output.push(val);
            exists[val] = true;
        }
    });

    return output.sort(function (a, b) {
        return a - b;
    });
};

module.exports = removeDuplicate;