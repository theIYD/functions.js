const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isHexColor(str) {
    const hex = regexpattern('hexcolor');

    string_util.isString(str);
    return hex.test(str);
}       