/**
 * @function Generate random hex color
 * @returns {String}
 */
const generateHexColor = () => {
    let letters = '0123456789ABCDEF', color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports = generateHexColor