/**
 * @function slopeOfALine: Calculates the slope of a line using points and angle of inclination. arg takes angle of inclination or an array of initial points and final points.
 * Example: arg = 60 degrees or [x0,y0,x1,y1]
 * @param {Number || Array} arg - a number or an array of points
 * @returns {Number} 
 */
const slopeOfALine = arg => {
    let slope = 0;

    if(arg) {
        if(!isNaN(arg)) {
            slope = Math.tan(arg*(Math.PI)/180);
        } else if(Array.isArray(arg)) {
            let initialX, initialY, finalX, finalY;
            initialX = arg[0], initialY = arg[1], finalX = arg[2], finalY = arg[3];

            if(arg.every((val, i, arr) => val === 0)) {
                throw new Error('Inderminate');
            } else {
                slope = (finalY - initialY) / (finalX - initialX);
            }
        }
    }

    return slope;
}

module.exports = slopeOfALine