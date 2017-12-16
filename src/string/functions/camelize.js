/**
 * @function Camelize a string i.e CamelCase
 * @param {*} str 
 */
const camelize = (str) => {
    return str
    .replace(/\s(.)/g, val => val.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, val => val.toLowerCase())
}

module.exports = camelize