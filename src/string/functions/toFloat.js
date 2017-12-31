const string_util = require('./util/isString');

/**
 * @function Parse string to float value
 * @param {String} str - a string
 * @returns {Number} 
 */
const toFloat = str => {
    string_util.isString(str);
    return parseFloat(str);
}

module.exports = toFloat