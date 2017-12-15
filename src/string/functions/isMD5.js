const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isMD5: Validate MD5
 * @param string
 */
const isMD5 = (str) => {
    string_util.isString(str);
    const md5 = regexpattern('md5');

    return md5.test(str);
};

module.exports = isMD5
