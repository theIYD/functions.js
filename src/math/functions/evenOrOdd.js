/**
 * @function Number is even or odd
 * @param {Number} number 
 * @returns {Boolean}
 */
const isEven = number => {
    return number % 2 === 0;
}

const isOdd = number => {
    return number % 2 !== 0;
}

module.exports = {
  isEven,
  isOdd,  
};