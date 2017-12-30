"use strict";

/**
 * @function Humanize a number
 * @param {Number} num - a number
 * @returns {String} 
 */
var humanizeNumber = function humanizeNumber(num) {
  var array = ["th", "st", "nd", "rd"];
  if (num === undefined) return "";
  var lstDg = num % 10;
  return lstDg < 4 ? num + array[lstDg] : num + array[0];
};

module.exports = humanizeNumber;