'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isMACAddress: String is a MAC Address.
 * @param {*} str 
 */
var isMACAddress = function isMACAddress(str) {
    var mac = regexpattern('mac');

    string_util.isString(str);
    return mac.test(str);
};

module.exports = isMACAddress;