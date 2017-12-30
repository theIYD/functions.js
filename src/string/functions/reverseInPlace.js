/**
 * @function Reverse words of a sentence in place
 * @param {*} str 
 */
const reverseInPlace = str => {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

module.exports = reverseInPlace