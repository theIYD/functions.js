const string_util = require('./util/isString');

/**
 * @function isEndWidth: String ends with target.
 * @param {*} str 
 * @param {*} target 
 */
const isEndWith = (str, target) => {
    if(target) {
        string_util.isString(str);
        return (str.substr(-target.length) === target) ? true : false;
    }
}

module.exports = isEndWith