/**
 * @function Subtract a number from another
 * @param {Array} arr - an array
 * @returns {Number} 
 */
const subract = (firstNum, secondNum) => {
    return (firstNum >= secondNum) ? firstNum - secondNum : secondNum - firstNum;
}

module.exports = subract