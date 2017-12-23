/**
 * @function Check if the first number is divisible by second one
 * @param {*} dividend 
 * @param {*} divisor 
 */
const isDivisible = (dividend, divisor) => {
    return dividend % divisor === 0
}

module.exports = isDivisible