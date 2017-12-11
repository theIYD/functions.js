const string_util = require('./util/isString');

export default function isMACAddress(str) {
    const mac = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
    
    string_util.isString(str);
    return mac.test(str);    
}