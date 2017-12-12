const string_util = require('./util/isString');

export default function isLowerCase(str) {
    string_util.isString(str);

    return (str === str.toLowerCase());
}