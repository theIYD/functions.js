/**
 * @function Reverse words of a sentence in place
 * @param {String} str - a string
 * @returns {String}  
 */
const reverseInPlace = str => {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

module.exports = reverseInPlace