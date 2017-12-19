/**
 * @function Simple division function which returns an array of quotient & remainder.
 * @param {*} dividend 
 * @param {*} divisor 
 */
const division = (dividend, divisor) => {
    return [dividend / divisor, dividend % divisor];
}

module.exports = division