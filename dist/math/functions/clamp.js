'use strict';

/**
 * @function Clamp a number
 * @param {Number} number 
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} 
 */
var clamp = function clamp(number, min, max) {
  if (min > max) throw new RangeError('`max` must be greater than `min`');
  if (number < min) return min;
  if (number > max) return max;
  return number;
};

module.exports = clamp;