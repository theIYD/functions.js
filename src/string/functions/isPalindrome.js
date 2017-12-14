const string_util = require('./util/isString');

export default function isPalindrome(str) {
    string_util.isString(str);
    const reverse = str.toLowerCase().replace(/[\W_]/g,'').split("").reverse().join("");

    return str.toLowerCase().replace(/[\W_]/g,'') === reverse;
};