/**
 * @function pythagorasDistance: Calculate the pythogorean distance if arg1 and arg2 are 2 sides of a right-angled triangle
 * @param {*} arg1 
 * @param {*} arg2 
 */
const pythagorasDistance = (arg1, arg2) => {
    return Math.sqrt((arg1*arg1 + arg2*arg2));
}

module.exports = {
    pythagorasDistance
}