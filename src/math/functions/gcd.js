/**
 * @function gcd: Calculate the greatest common divisor among the two numbers using Euclidean's algorithm.
 * 
 * @param {*} numb1 
 * @param {*} numb2 
 */
const gcd = (numb1, numb2) => {
    let remain1, remain2, output;
    if(numb1!=numb2) {
        remain1 = numb1%numb2; 
        remain2 = numb2%remain1; 
        // Handle Exception
        try {
            let temp = remain1%remain2;
            if(temp==0) {
                output = remain2;
            }
            else {
                output = remain1;
            }
        }catch(e) {
            output = e;
        }	
    } 
    else {
        output = 'Numbers equal';
    }

    return output;
}

module.exports = {gcd};