/**
 * @function Sort an array using the selection sort technique
 * @param {Array} arr - an array
 * @returns {Array} 
 */
const selectionSort = arr => {
    for(let index = 0; index < arr.length; index++) {
        let minimum = index;

        for(let j = index + 1; j < arr.length; j++) {
            if(arr[j] < arr[minimum]) minimum = j;
        }
        if(index !== minimum) [arr[index], arr[minimum]] = [arr[minimum], arr[index]];
    }
        return arr;
}

module.exports = selectionSort