const string_util = require('./util/isString');

/**
 * @function isEquals: Compares the two strings entered
 * @param {*} str 
 * @param {*} elem 
 */
const isEquals = (str, elem) => {
    string_util.isString(str);
    return str === elem;
}

module.exports = isEquals
