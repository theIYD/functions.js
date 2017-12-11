const isString = (input) => {
    if(!(typeof input === 'string' || input instanceof String)) {
        throw new TypeError('String validation only');
    }
}

module.exports = {isString};