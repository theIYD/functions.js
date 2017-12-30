"use strict";

/**
 * @function Convert radians to degrees
 * @param {Number} deg
 * @returns {Number} 
 */
var radToDeg = function radToDeg(rad) {
  return rad * (180 / Math.PI);
};

module.exports = radToDeg;