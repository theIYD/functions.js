"use strict";

var string_util = require('./util/isString');

/**
 * @function hasAtleastOneLowerCaseLetter: String has atleast one lower-cased letter.
 * @param {String} str - a string
 * @returns {Boolean} 
 */
var hasAtleastOneLowerCaseLetter = function hasAtleastOneLowerCaseLetter(str) {
    string_util.isString(str);
    var temp = false;
    var a = str.split("");
    a.forEach(function (key, index) {
        if (a[index] === key.toLowerCase()) {
            temp = true;
        }
    });

    return temp;
};

module.exports = hasAtleastOneLowerCaseLetter;