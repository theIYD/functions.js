/**
 * @function Filter out falsy values from an array
 * @param {Array} arr - an array  
 * @returns {Array}
 */
const filterFalsy = arr => {
    return arr.filter((val) => {
        if(val !== false || val !== null || val !== 0 || val !== "") {
            return val;
        }
    });
}

/**
 * @function Filter out an element from an array
 * @param {Array} arr: an array 
 * @param {Element} elem: an element 
 * @returns {Array}
 */
const filter = (arr, elem) => {
    return arr.filter((val) => (val === elem) ? val : null)
}

module.exports = {filterFalsy, filter}