"use strict";

/**
 * @function Sort string characters in alphabetical order
 * @param {*} str 
 */
var sortChar = function sortChar(str) {
  return str.toLowerCase().match(/\w/g).sort().join("");
};

module.exports = sortChar;