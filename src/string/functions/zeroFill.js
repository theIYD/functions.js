/**
 * @function Zerofill a number to the given length
 * @param {Number} number - a number
 * @param {*} len - length
 */
const zeroFill = (number, len) => {
	return '0'.repeat(len - number.toString().length) + number;
}

module.exports = zeroFill