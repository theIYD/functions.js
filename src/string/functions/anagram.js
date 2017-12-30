const string_util = require('./util/isString');

/**
 * @function Both strings are anagrams
 * @param {String} str1 - First string
 * @param {String} str2  - Second String
 * @returns {Boolean} 
 */
const anagram = (str1, str2) => {
    string_util.isString(str1);
    string_util.isString(str2);
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

module.exports = anagram