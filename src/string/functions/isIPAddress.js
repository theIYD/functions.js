const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isIPAddress(str) {
    string_util.isString(str);

    return regexpattern('ip').test(str);
}