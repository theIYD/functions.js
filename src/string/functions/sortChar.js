/**
 * @function Sort string characters in alphabetical order
 * @param {String} str - a string
 * @returns {String} 
 */
const sortChar = str => {
    return str.toLowerCase().match(/\w/g).sort().join("");
}

module.exports = sortChar