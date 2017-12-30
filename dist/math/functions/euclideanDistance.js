'use strict';

/**
 * @function: euclideanDistance: Calculates the distance between two points in any plane. Initial takes an array of initial points & Final takes an array of final points.
 * @param {Array} initial: initial points 
 * @param {Array} final: final points
 * @returns {Number}
 */
var euclideanDistance = function euclideanDistance(initial, final) {
    var total = 0;
    if (initial && final) {
        for (var i = 0; i < initial.length; i++) {
            total = total + Math.pow(final[i] - initial[i], 2);
        }
        return Math.sqrt(total);
    } else {
        throw new Error('Initial and final points needed');
    }
};

module.exports = euclideanDistance;