const string_util = require('./util/isString');

export default function isHexColor(str) {
    const hex = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

    string_util.isString(str);
    return hex.test(str);
}       