const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isIPAddress: String is an IP address.
 * @param {*} str 
 */
const isIPAddress = str => {
    string_util.isString(str);

    return regexpattern('ip').test(str);
}

module.exports = isIPAddress