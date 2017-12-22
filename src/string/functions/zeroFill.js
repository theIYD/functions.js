/**
 * @function Zerofill a number to the given length
 * @param {*} number 
 * @param {*} len 
 */
const zeroFill = (number, len) => {
	return '0'.repeat(len - number.toString().length) + number;
}

module.exports = zeroFill