const string_util = require('./util/isString');

/**
 * @function String is a JSON object
 * @param {String} str
 * @returns {Boolean} 
 */
const isJSON = str => {
    string_util.isString(str);
    try {
        const obj = JSON.parse(str);
        return !!obj && typeof obj === 'object';
    } catch (e) {}
      return false;
}

module.exports = isJSON