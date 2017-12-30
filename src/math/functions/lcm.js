const gcd = require('./gcd');

/**
 * @function Calculate LCM of an array of numbers
 * @param {Array} arr - an array
 * @returns {Number} 
 */
const lcm = arr => {
    return arr.reduce((a,b) => {
        return (a * b / gcd(a,b));
    });
}

module.exports = lcm