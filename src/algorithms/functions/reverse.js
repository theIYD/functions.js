/**
 * @function Reverse an array
 * @param {Array} arr - an array
 * @returns {Array} 
 */
const reverse = arr => {
    let len = arr.length;
    return arr.map(() => arr[--len]);
}

module.exports = reverse