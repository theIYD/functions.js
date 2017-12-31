'use strict';

/**
 * @function Value is a function
 * @param {Argument} val 
 * @returns {Boolean}
 */
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

module.exports = isFunction;