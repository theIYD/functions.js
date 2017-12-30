'use strict';

/**
 * @function Generate random hex color
 * @returns {String}
 */
var generateHexColor = function generateHexColor() {
  var letters = '0123456789ABCDEF',
      color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

module.exports = generateHexColor;