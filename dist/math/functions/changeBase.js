"use strict";

/**
 * @function Convert a base of a number to any base. 
 * @param {Number} number 
 * @param {Number} originalBase 
 * @param {Number} finalBase 
 * @returns {Number}
 */
var changeBase = function changeBase(number, originalBase, finalBase) {
    var output = "";
    if (number !== undefined) {
        if (finalBase >= 2 && finalBase <= 36) {
            output = parseInt(number, originalBase).toString(finalBase);
        }
    }
    return output;
};

module.exports = changeBase;