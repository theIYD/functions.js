const string_util = require('./util/isString');

/**
 * @function Camelize a string i.e CamelCase
 * @param {String} str - a String
 * @returns {String} 
 */
const camelize = str => {
    string_util.isString(str);
    return str
    .replace(/\s(.)/g, val => val.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, val => val.toLowerCase())
}

module.exports = camelize