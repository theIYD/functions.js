/**
 * @function countPrimeFactors: A function to count all prime factors of a given number
 * @param {Number} n - a number
 * @returns {Number} 
 */
const countPrimeFactors = n => {
    let count = 0;
    while (n%2 == 0) {
        n = n/2;
        count++; }
    for (let i = 3; i <= Math.sqrt(n); i = i+2) {
        while (n%i == 0) {
            n = n/i;
            count++;}}
    if (n > 2) count++;
    return (count);
}

module.exports = countPrimeFactors;