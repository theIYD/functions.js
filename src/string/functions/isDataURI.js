const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isDataURI(str) {    
    string_util.isString(str);
    return regexpattern('dataURI').test(str);
}