const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function String is an emoji
 * @param {String} str - a string
 * @returns {Boolean}  
 */
const isEmoji = str => {
    string_util.isString(str);
    return regexpattern('emoji').test(str);
}

module.exports = isEmoji