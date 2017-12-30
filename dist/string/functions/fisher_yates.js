"use strict";

/**
 * @function fisherYates: Shuffle an array using the Fisher Yates Algorithm using a while loop.
 * @param {*} arr 
 */
var fisherYates = function fisherYates(arr) {
    var currentIndex = arr.length,
        temporaryValue = void 0,
        randomIndex = void 0;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
};

module.exports = {
    fisherYates: fisherYates
};