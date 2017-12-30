/**
 * @function Sort string characters in alphabetical order
 * @param {*} str 
 */
const sortChar = str => {
    return str.toLowerCase().match(/\w/g).sort().join("");
}

module.exports = sortChar