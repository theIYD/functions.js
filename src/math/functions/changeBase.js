/**
 * @function Convert a base of a number to any base. 
 * @param {Number} number 
 * @param {Number} originalBase 
 * @param {Number} finalBase 
 * @returns {Number}
 */
const changeBase = (number, originalBase, finalBase) => {
    let output = "";
    if (number !== undefined) {
        if (finalBase >= 2 && finalBase <= 36) {
            output = parseInt(number, originalBase).toString(finalBase);
        }
    }
    return output;      
}

module.exports = changeBase