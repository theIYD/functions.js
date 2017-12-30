const string_util = require('./util/isString');

/**
 * @function isEquals: Compares the two strings entered
 * @param {String} str - a string
 * @param {String} elem - an element 
 */
const isEquals = (str, elem) => {
    string_util.isString(str);
    return str === elem;
}

module.exports = isEquals
