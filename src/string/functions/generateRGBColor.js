/**
 * @function Generate random RGB color
 */
const generateRGBColor = () => {
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

module.exports = generateRGBColor