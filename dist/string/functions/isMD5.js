'use strict';

var string_util = require('./util/isString');
var regexpattern = require('./util/RegexPatterns').RegexPatterns;

/**
 * @function isMD5: Validate MD5
 * @param string
 */
var isMD5 = function isMD5(str) {
    string_util.isString(str);
    var md5 = regexpattern('md5');

    return md5.test(str);
};

module.exports = isMD5;