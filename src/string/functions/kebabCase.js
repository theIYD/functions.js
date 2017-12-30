const string_util = require('./util/isString');
/**
 * @function to Kebab Case
 * @param {*} str 
 */
const kebabCase = str => {
    string_util.isString(str);
    return str.replace(/([a-z])([A-Z])/g, "$1-$2")
             .replace(/\s+/g, '-')
             .toLowerCase();
}

module.exports = kebabCase