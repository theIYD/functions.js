const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isASCII(str) {
    const regex = regexpattern('ascii');
    
    string_util.isString(str);
    return regex.test(str);
}