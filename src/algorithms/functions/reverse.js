/**
 * @function Reverse an array
 * @param {*} arr 
 */
const reverse = (arr) => {
    let len = arr.length;
    return arr.map(() => arr[--len]);
}

module.exports = reverse