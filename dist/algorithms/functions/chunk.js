"use strict";

/**
 * @function Split array into chunks of smaller arrays of the desired size
 * @param {*} arr 
 * @param {*} size 
 */
var chunk = function chunk(arr, size) {
    var output = [],
        chunks = arr.length / size;
    for (var i = 0, j = 0; i < chunks; i++, j += size) {
        output[i] = arr.slice(j, j + size);
    }

    return output;
};

module.exports = chunk;