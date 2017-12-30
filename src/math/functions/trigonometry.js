/**
 * @function Sine Rule using two angles & one side
 * @param {Number} sideOne 
 * @param {Number} angleOne 
 * @param {Number} angleTwo 
 * @returns {Number}
 */
const sineRule = (sideOne, angleOne, angleTwo) => {
    return Math.sin(angleTwo / 180*Math.PI) * (sideOne / Math.sin(angleOne/180*Math.PI));
}

/**
 * @function Cosine Rule
 * @param {Number} sideOne 
 * @param {Number} sideTwo 
 * @param {Number} theta
 * @returns {Number} 
 */
const cosineRule = (sideOne, sideTwo, theta=0) => {
    let angle = (Math.PI / 180) * parseFloat(theta)
    return Math.sqrt((sideOne * sideOne + sideTwo * sideTwo) - 2 * sideOne * sideTwo * Math.cos(angle))
}

module.exports = {
    sineRule,
    cosineRule
}