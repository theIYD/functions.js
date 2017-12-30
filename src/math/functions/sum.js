/**
 * @function sumOfArray: Addition of all the integers in an array
 * @param {*} arr 
 */
const sumOfArray = arr => {
    return arr.reduce((previous, current) => current += previous);
}

module.exports = sumOfArray