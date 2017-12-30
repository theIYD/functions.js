const string_util = require('./util/isString');

/**
 * @function initials: Get the intitials of a person's name
 * @param {*} str 
 */
const initials = str => {
    string_util.isString(str);
    let output = '';
    str = str.split("");
    output = str[0];
    str.forEach((val, index) => {
        if(val.indexOf(' ') != -1) {
            output += str[index+1];
        }
    });
    return output;
}

module.exports = initials