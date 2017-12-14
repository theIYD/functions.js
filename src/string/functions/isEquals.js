const string_util = require('./util/isString');

/**
 * @function isEquals: Compares the two strings entered
 * @param {*} str 
 * @param {*} elem 
 */
export default function isEquals(str, elem){
    string_util.isString(str);
    return str === elem;
}
