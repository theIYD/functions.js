const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isHexColor: String is a hex color.
 * @param {*} str 
 */
const isHexColor = str => {
    const hex = regexpattern('hexcolor');

    string_util.isString(str);
    return hex.test(str);
}       

module.exports = isHexColor