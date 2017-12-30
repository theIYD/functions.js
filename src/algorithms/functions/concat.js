/**
 * @function Concatenates into a single array
 * @param {Array} arrs 
 * @returns {Array}
 */
const concat = (...arrs) => {
    let temp = [];
    arrs.forEach(arr => arr.forEach(val => temp.push(val)));
    return temp;
};

module.exports = concat