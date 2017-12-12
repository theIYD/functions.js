const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isValidEmail(str) {
    const regex = regexpattern('email');

    string_util.isString(str);
    return (regex) ? regex.test(str) : null; 
} 