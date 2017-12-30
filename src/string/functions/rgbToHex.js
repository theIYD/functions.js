/**
 * @function rgbToHex: RGB to Hex format
 * @param {Number} red 
 * @param {Number} green 
 * @param {Number} blue
 * @returns {String} 
 */
const rgbToHex = (red, green, blue) => {
    let hex = '';
    hex = "#" + ("0" + parseInt(red,10).toString(16)).slice(-2) +
    ("0" + parseInt(green,10).toString(16)).slice(-2) +
    ("0" + parseInt(blue,10).toString(16)).slice(-2);
    
    return hex;
}  

module.exports = rgbToHex