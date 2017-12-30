"use strict";

/**
 * @function Romanize a number
 * @param {*} num 
 */
var romanize = function romanize(num) {
    if (!+num) throw new Error('Some error');
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        romanNum = "",
        temp = 3;
    while (temp--) {
        romanNum = (key[+digits.pop() + temp * 10] || "") + romanNum;
    }return Array(+digits.join("") + 1).join("M") + romanNum;
};

module.exports = romanize;