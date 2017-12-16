/**
 * @function rgbToHex: RGB to Hex format
 * @param {*} red 
 * @param {*} green 
 * @param {*} blue 
 */
const rgbToHex = (red, green, blue) => {
    let hex = '';
    hex = "#" + ("0" + parseInt(red,10).toString(16)).slice(-2) +
    ("0" + parseInt(green,10).toString(16)).slice(-2) +
    ("0" + parseInt(blue,10).toString(16)).slice(-2);
    
    return hex;
}  

module.exports = rgbToHex