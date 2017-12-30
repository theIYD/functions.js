'use strict';

/**
 * @function Reverse words of a sentence in place
 * @param {*} str 
 */
var reverseInPlace = function reverseInPlace(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
};

module.exports = reverseInPlace;