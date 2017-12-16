/**
 * @function Secures your email using asterisks
 * @param {*} str 
 */
const secureEmail = (str) => {
    let str1, temp, asterisks;
    str1 = str.split("@");
    asterisks = str1[0].length - str1[0].length*0.8;
    temp = str1[0].substring(0, Math.floor(asterisks));

    return `${temp}${'*'.repeat(str1[0].split("").length - asterisks)}@${str1[1]}`;
}

module.exports = secureEmail