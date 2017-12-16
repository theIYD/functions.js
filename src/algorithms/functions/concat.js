/**
 * @function Concatenates into a single array
 * @param {*} arrs 
 */
const concat = (...arrs) => {
    let temp = [];
    arrs.forEach(arr => arr.forEach(val => temp.push(val)));
    return temp;
};

module.exports = concat