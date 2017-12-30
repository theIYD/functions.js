const string_util = require('./util/isString');

/**
 * @function Secure password using astrisks
 * @param {String} str - a string
 * @returns {String} 
 */
const securePassword = str => {
    string_util.isString(str);
    return '*'.repeat(str.length);
}

module.exports = securePassword
  