'use strict';

/**
 * @function slopeOfALine: Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points.
 * Example: arg = 60 degrees or [x0,y0,x1,y1]
 * @param {Number || Array} arg - a number or an array of points
 * @returns {Number} 
 */
var slopeOfALine = function slopeOfALine(arg) {
    var slope = 0;

    if (arg) {
        if (!isNaN(arg)) {
            slope = Math.tan(arg * Math.PI / 180);
        } else if (Array.isArray(arg)) {
            var initialX = void 0,
                initialY = void 0,
                finalX = void 0,
                finalY = void 0;
            initialX = arg[0], initialY = arg[1], finalX = arg[2], finalY = arg[3];

            if (arg.every(function (val, i, arr) {
                return val === 0;
            })) {
                throw new Error('Inderminate');
            } else {
                slope = (finalY - initialY) / (finalX - initialX);
            }
        }
    }

    return slope;
};

module.exports = slopeOfALine;