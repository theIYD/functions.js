const isString = require('./util/isString').isString;

/**
 * @function isMD5: Validate MD5
 * @param string
 */
const isMD5 = (str) => {
    isString(str);
    const md5 = /^[a-f0-9]{32}$/;

    return md5.test(str);
};

module.exports = {isMD5};