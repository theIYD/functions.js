const string_util = require('./util/isString');

/**
 * @function isMD5: Validate MD5
 * @param string
 */
const isMD5 = (str) => {
    string_util.isString(str);
    const md5 = /^[a-f0-9]{32}$/;

    return md5.test(str);
};

module.exports = {isMD5};