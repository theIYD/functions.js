const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isHexaDecimal: String is hexadecimal.
 * @param {*} str 
 */
const isHexaDecimal = str => {
    string_util.isString(str);

    return regexpattern('hexdecimal').test(str);
}

module.exports = isHexaDecimal