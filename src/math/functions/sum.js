/**
 * @function sumOfArray: Addition of all the integers in an array
 * @param {Array} arr - an array
 * @returns {Number} 
 */
const sumOfArray = arr => {
    return arr.reduce((previous, current) => current += previous);
}

module.exports = sumOfArray