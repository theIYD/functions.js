const string_util = require('./util/isString');

/**
 * @function isEmpty: String is empty or not
 * @param {*} str 
 */
export default function isEmpty(str) {
    string_util.isString(str);
    return (str === null || str === 'undefined');
}
