const string_util = require('./util/isString');

/**
 * @function isLowerCase: String is all lower-cased.
 * @param {*} str 
 */
const isLowerCase = (str) => {
    string_util.isString(str);

    return (str === str.toLowerCase());
}

module.exports = isLowerCase