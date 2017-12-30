/**
 * @function Round a number to two places
 * @param {*} number 
 */
const round = number => {
    return +(Math.round(`${number}e+2`)  + "e-2");
}

module.exports = round