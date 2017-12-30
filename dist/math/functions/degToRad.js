"use strict";

/**
 * @function Convert degrees to radians
 * @param {*} deg 
 */
var degToRad = function degToRad(deg) {
  return deg * (Math.PI / 180);
};

module.exports = degToRad;