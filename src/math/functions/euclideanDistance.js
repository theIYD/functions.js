
/**
 * @function: euclideanDistanceBetweenTwoPoints2D: Calculates the distance between two points in a 2D plane. Initial takes an array of initial points & Final takes an array of final points.
 * 
 * @param {*} initial: initial points (x0,y0) 
 * @param {*} final: final points (x1,y1)
 */
const euclideanDistanceBetweenTwoPoints2D = (initial, final) => {
    if(initial && final) {
        let total = Math.sqrt((Math.pow((final[0] - initial[0]), 2)) + Math.pow((final      [1] - initial[1]), 2));
        
        return total;
    } else {
        throw new Error('Initial and final points needed');
    }
}

module.exports = euclideanDistanceBetweenTwoPoints2D