"use strict";

/**
 * @function Flatten/Merge two arrays
 * @param {*} arr 
 * @param {*} givenArr 
 */
var flatten = function flatten(arr, givenArr) {
  arr.forEach(function (item) {
    Array.isArray(item) && flatten(item, givenArr);
    !Array.isArray(item) && givenArr.push(item);
  });

  return givenArr;
};

module.exports = flatten;