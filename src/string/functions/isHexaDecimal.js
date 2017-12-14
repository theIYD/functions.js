const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isHexaDecimal(str) {
    string_util.isString(str);

    return regexpattern('hexdecimal').test(str);
}