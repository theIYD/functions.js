/**
 * @function Check if the first number is divisible by second one
 * @param {Number} dividend 
 * @param {Number} divisor
 * @returns {Boolean} 
 */
const isDivisible = (dividend, divisor) => {
    return dividend % divisor === 0
}

module.exports = isDivisible