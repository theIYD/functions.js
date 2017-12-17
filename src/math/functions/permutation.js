const factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple permutation 
 * @param {*} number 
 * @param {*} rep 
 */
const permutation = (number, rep) => {
    return factorial(number) / factorial(number - rep);
}

module.exports = permutation