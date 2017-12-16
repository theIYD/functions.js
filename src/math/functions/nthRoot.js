/**
 * @function nthRoot: Calculates the nth root of a positive number
 * @param {*} number 
 * @param {*} n 
 */
const nthRoot = (number, n) => {
    return Math.pow(number, 1 / n);
}

module.exports = nthRoot