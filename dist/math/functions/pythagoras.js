"use strict";

/**
 * @function pythagorasDistance: Calculate the pythogorean distance if side1 and side2 are 2 sides of a right-angled triangle
 * @param {Number} side1 
 * @param {Number} side2 
 * @returns {Number}
 */
var pythagorasDistance = function pythagorasDistance(side1, side2) {
    return Math.sqrt(side1 * side1 + side2 * side2);
};

module.exports = {
    pythagorasDistance: pythagorasDistance
};