const string_util = require('./util/isString');

export default function isEndWith(str, target) {
    if(target) {
        string_util.isString(str);
        return (str.substr(-target.length) === target) ? true : false;
    }
}