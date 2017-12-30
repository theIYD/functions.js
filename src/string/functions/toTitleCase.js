const string_util = require('./util/isString');

/**
 * @function Convert string to titleCase
 * @param {*} str 
 */
const toTitleCase = str => {
    string_util.isString(str);
    return str.toString().replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());
}

module.exports = toTitleCase