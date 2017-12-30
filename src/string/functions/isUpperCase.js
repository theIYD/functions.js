const string_util = require('./util/isString');

/**
 * @function isUpperCase: String is all upper-cased.
 * @param {*} str 
 */
const isUpperCase = str => {
    string_util.isString(str);

    return (str === str.toUpperCase());
}

module.exports = isUpperCase