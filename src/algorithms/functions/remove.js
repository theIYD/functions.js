/**
 * @function Remove an element from an array
 * @param {*} arr 
 * @param {*} elem 
 */
const remove = (arr, elem) => {
    arr.forEach((num, i) => { if (num === elem) arr.splice(i, 1) });
    return arr;
}

module.exports = remove