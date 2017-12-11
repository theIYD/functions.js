const isString = (input) => {
    if(!(typeof input === 'string' || input instanceof String)) {
        throw new TypeError('String validation only');
    }
}

/**
 * Courtesy: https://github.com/chriso/validator.js/blob/master/src/lib/util/toString.js
 */
const convertString = (arg) => {
    if(!(input) && typeof arg === 'object') {
        if(typeof arg.convertString === 'function') {
            arg = arg.convertString();
        } else {
            arg = '[object Object]';
        }
    } else if(arg === null || typeof arg === 'undefined' || (!arg.length && isNaN(arg))) {
        arg = '';
    }
    
    return String(arg);
}

module.exports = {isString, convertString};