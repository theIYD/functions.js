"use strict";

/**
 * @function Convert radians to degrees
 * @param {*} deg 
 */
var radToDeg = function radToDeg(rad) {
  return rad * (180 / Math.PI);
};

module.exports = radToDeg;