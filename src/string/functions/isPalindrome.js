const string_util = require('./util/isString');

/**
 * @function isPalindrome: String is a palindrome.
 * @param {*} str 
 */
const isPalindrome = (str) => {
    string_util.isString(str);
    const reverse = str.toLowerCase().replace(/[\W_]/g,'').split("").reverse().join("");

    return str.toLowerCase().replace(/[\W_]/g,'') === reverse;
};

module.exports = isPalindrome