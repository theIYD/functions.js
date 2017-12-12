const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

export default function isMACAddress(str) {
    const mac = regexpattern('mac');
    
    string_util.isString(str);
    return mac.test(str);    
}