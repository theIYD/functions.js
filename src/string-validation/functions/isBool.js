const string_util = require('./util/isString');

export default function isBool(str) {
    string_util.isString(str);
    return (str === 'true' || str === 'false')
}