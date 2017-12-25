/**
 * @function Check if a number is prime
 * @param {*} number 
 */
const isPrime = (number) => {
    let divisor = 2;
    while (number > divisor) {
        if(number % divisor === 0) return false;
        else divisor++;
    }
    return true;
}

module.exports = isPrime