/**
 * @function Simple division function which returns an array of quotient & remainder.
 * @param {Number} dividend 
 * @param {Number} divisor 
 * @returns {Number}
 */
const division = (dividend, divisor) => {
    return [dividend / divisor, dividend % divisor];
}

module.exports = division