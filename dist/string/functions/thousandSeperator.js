"use strict";

/**
 * @function Seperate thousands using commas
 * @param {Number} num - a number
 * @returns {String} 
 */
var thousandSeperator = function thousandSeperator(num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

module.exports = thousandSeperator;