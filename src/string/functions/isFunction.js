/**
 * @function Value is a function
 * @param {Argument} val 
 * @returns {Boolean}
 */
const isFunction = val => {
    return typeof val === 'function';
}

module.exports = isFunction