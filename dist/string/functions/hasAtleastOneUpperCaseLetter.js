"use strict";

var string_util = require('./util/isString');

/**
 * @function hasAtleastOneUpperCaseLetter: String has atleast one upper-cased letter.
 * @param {*} str 
 */
var hasAtleastOneUpperCaseLetter = function hasAtleastOneUpperCaseLetter(str) {
  string_util.isString(str);
  var temp = false;
  var a = str.split("");
  a.forEach(function (key, index) {
    if (key.toUpperCase() === a[index]) {
      temp = true;
    }
  });
  return temp;
};

module.exports = hasAtleastOneUpperCaseLetter;