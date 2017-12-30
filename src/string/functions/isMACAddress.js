const string_util = require('./util/isString');
const regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isMACAddress: String is a MAC Address.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
const isMACAddress = str => {
    const mac = regexpattern('mac');
    
    string_util.isString(str);
    return mac.test(str);    
}

module.exports = isMACAddress