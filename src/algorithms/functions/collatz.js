/**
 * @function Collatz Algorithm
 * @param {Number} number
 * @returns {Array} 
 */
const collatz = number => {
	let tree = []
    
    tree.push(parseInt(number))

    while (number != 1) {
    	if (number % 2 == 0) {
    		number = number / 2
    		tree.push(number)
    	} else {
    		number = 3 * number + 1
    		tree.push(number)
    	}
    }

    return tree
}

module.exports = collatz