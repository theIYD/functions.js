/**
 * @function Subtract a number from another
 * @param {*} arr 
 */
const subract = (firstNum, secondNum) => {
    return (firstNum >= secondNum) ? firstNum - secondNum : secondNum - firstNum;
}

module.exports = subract