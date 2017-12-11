const string_util = require('./util/isString');

export default function isASCII(str) {
    const regex = /^[\x00-\x7F]+$/;
    
    string_util.isString(str);
    return regex.test(str);
}