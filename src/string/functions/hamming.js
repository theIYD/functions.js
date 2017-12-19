const string_util = require('./util/isString');

/**
 * @function String Hamming Distance
 * @param {*} str1 
 * @param {*} str2 
 */
const stringHammingDistance = (str1, str2) => {
    string_util.isString(str1), string_util.isString(str2);
    let distance = 0;
    str1 = str1.toLowerCase(), str2 = str2.toLowerCase();

    for(let i in str1) {
        if(str2[i] && str2[i] !== str1[i]) {
            distance += Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i)) + Math.abs(str2.indexOf( str1[i] )) * 2;
        } else if(!str2[i]) {
            distance += distance;
        }
    }
    return distance;
}

module.exports = stringHammingDistance