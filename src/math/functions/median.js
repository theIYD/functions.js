/**
 * @function Calculate median of a sorted number array
 * @param {Array} arr - an array
 * @returns {Number} 
 */
const median = arr => {
    let median;
    arr.sort((a,b) => a - b);
    if (arr.length % 2 === 0) median = (arr[arr.length/2]+arr[arr.length/2 - 1])/2;
    else median = arr[arr.length/2];
    return median
}

module.exports = median