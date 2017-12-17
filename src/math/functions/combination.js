const factorial = require('./factorial').factorialOneLine;

/**
 * @function Calculates simple combination 
 * @param {*} number 
 * @param {*} rep 
 */
const combination = (number, rep) => {
    return factorial(number) / (factorial(rep) * factorial(number - rep));
}

module.exports = combination