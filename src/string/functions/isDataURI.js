const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isDataURI: String is a data uri format.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
const isDataURI = str => {    
    string_util.isString(str);
    return regexpattern('dataURI').test(str);
}

module.exports = isDataURI