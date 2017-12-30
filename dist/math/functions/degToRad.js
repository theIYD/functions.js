"use strict";

/**
 * @function Convert degrees to radians
 * @param {Number} deg - a number
 * @returns {Number} 
 */
var degToRad = function degToRad(deg) {
  return deg * (Math.PI / 180);
};

module.exports = degToRad;