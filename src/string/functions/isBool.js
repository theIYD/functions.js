const string_util = require('./util/isString');

/**
 * @function isBool: String contains true, false, 0 or 1
 * @param {*} str 
 */
const isBool = (str) => {
    string_util.isString(str);
    return (str === 'true' || str === 'false' || parseInt(str) === 0 || parseInt(str) === 1);
}

module.exports = isBool