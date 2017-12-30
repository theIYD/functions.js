/**
 * @function Generate a Global Unique Identifier
 * @param {Number} len - length 
 * @returns {String}
 */
const guid = len => {
    let arr = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        length = len || 32;
        
    for (var i = 0; i < length; i++) {
        arr[i] = chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return arr.join('');
}

module.exports = guid