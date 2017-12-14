const string_util = require('./util/isString');
import regexpattern from './util/RegexPatterns';

/**
 * @function isMD5: Validate MD5
 * @param string
 */
export default function isMD5(str){
    string_util.isString(str);
    const md5 = regexpattern('md5');

    return md5.test(str);
};
