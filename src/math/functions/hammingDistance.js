/**
 * @function Calculate hamming distance
 * @param {Number} number1 
 * @param {Number} number2
 * @returns {Number} 
 */
const hammingDistance = (number1, number2) => {
    return ((number1 ^ number2).toString(2).match(/1/g) || '').length;
}

module.exports = hammingDistance