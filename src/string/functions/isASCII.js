const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isASCII: String contains ASCII characters
 * @param {String} str - a string
 * @returns {Boolean} 
 */
const isASCII = str => {
    const regex = regexpattern('ascii');
    
    string_util.isString(str);
    return regex.test(str);
}

module.exports = isASCII