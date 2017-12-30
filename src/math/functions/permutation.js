const factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple permutation 
 * @param {Number} number - a number
 * @param {Number} rep - repitition
 * @returns {Number}
 */
const permutation = (number, rep) => {
    return factorial(number) / factorial(number - rep);
}

module.exports = permutation