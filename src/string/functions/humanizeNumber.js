/**
 * @function Humanize a number
 * @param {Number} num - a number
 * @returns {String} 
 */
const humanizeNumber = num => {
    let array = ["th","st","nd","rd"]
    if (num === undefined) return "";
    let lstDg = num % 10;
    return  lstDg < 4? num + array[lstDg] : num + array[0];
}

module.exports = humanizeNumber
