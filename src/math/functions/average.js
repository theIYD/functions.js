/**
 * @function average: Calculates the average of an array
 * @param {*} arr 
 */
const average = (arr) => {
    let temp = 0, average;
    if(Array.isArray(arr)) {
        temp = arr.reduce((previous, current) => current += previous)
        average = temp / arr.length;
        return average;
    } else {
        throw new Error('error occured')
    }
}

module.exports = average