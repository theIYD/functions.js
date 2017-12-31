const string_util = require('./util/isString');

/**
 * @function Parse string to integer value
 * @param {String} str - a string
 * @returns {Number} 
 */
const toInt = (str, radix) => {
    string_util.isString(str);
    return parseInt(str, radix || 10);
}

module.exports = toInt