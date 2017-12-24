/**
 * @function Number is even or odd
 * @param {*} number 
 */
const isEven = (number) => {
    return number % 2 === 0;
}

const isOdd = (number) => {
    return number % 2 !== 0;
}

module.exports = {
  isEven,
  isOdd,  
};