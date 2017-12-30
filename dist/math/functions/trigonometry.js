"use strict";

/**
 * @function Sine Rule using two angles & one side
 * @param {Number} sideOne 
 * @param {Number} angleOne 
 * @param {Number} angleTwo 
 * @returns {Number}
 */
var sineRule = function sineRule(sideOne, angleOne, angleTwo) {
    return Math.sin(angleTwo / 180 * Math.PI) * (sideOne / Math.sin(angleOne / 180 * Math.PI));
};

/**
 * @function Cosine Rule
 * @param {Number} sideOne 
 * @param {Number} sideTwo 
 * @param {Number} theta
 * @returns {Number} 
 */
var cosineRule = function cosineRule(sideOne, sideTwo) {
    var theta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var angle = Math.PI / 180 * parseFloat(theta);
    return Math.sqrt(sideOne * sideOne + sideTwo * sideTwo - 2 * sideOne * sideTwo * Math.cos(angle));
};

module.exports = {
    sineRule: sineRule,
    cosineRule: cosineRule
};