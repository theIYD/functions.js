/**
 * @function Clamp a number
 * @param {*} number 
 * @param {*} min 
 * @param {*} max 
 */
const clamp = (number, min, max) => {
    if (min > max) throw new RangeError('`max` must be greater than `min`');
	if (number < min) return min;
	if (number > max) return max;
	return number;
}

module.exports = clamp