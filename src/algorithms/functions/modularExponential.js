/**
 * @function Modular Exponential Algorithm
 * @param {*} base 
 * @param {*} power 
 * @param {*} mod 
 */
const modularExponential = (base, power, mod) => {
    if (power < 0) return -1;
    let result = 1;
    base %= mod;

    while (power > 0) {
        if (power % 2 == 1) result = (result * base) % mod;
        power = power >> 1;
        base = (base * base) % mod;
    }
    return result;
}

module.exports = modularExponential