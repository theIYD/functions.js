/**
 * @function Convert radians to degrees
 * @param {Number} deg
 * @returns {Number} 
 */
const radToDeg = rad => {
    return rad * (180 / Math.PI);
}

module.exports = radToDeg