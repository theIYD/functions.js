
/**
 * @function: euclideanDistance: Calculates the distance between two points in any   plane. Initial takes an array of initial points & Final takes an array of final points.
 * @param {*} initial: initial points 
 * @param {*} final: final points
 */
const euclideanDistance = (initial, final) => {
    let total = 0;
    if(initial && final) {
        for(let i=0; i<initial.length; i++) {
            total = total + Math.pow(final[i] - initial[i], 2);
        }
        return Math.sqrt(total);
    } else {
        throw new Error('Initial and final points needed');
    }
}

module.exports = euclideanDistance