const string_util = require('./util/isString');

export default function isUpperCase(str) {
    string_util.isString(str);

    return (str === str.toUpperCase());
}