const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isValidEmail: String is a valid email id.
 * @param {*} str 
 */
const isValidEmail = (str) => {
    const regex = regexpattern('email');

    string_util.isString(str);
    return (regex) ? regex.test(str) : null; 
} 

module.exports = isValidEmail