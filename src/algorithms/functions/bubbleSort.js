/**
 * @function Sort an array using bubble sort technique
 * @param {*} arr 
 */
const bubbleSort = (arr) => {
    let is_sorted = false, temp;
    while (!is_sorted) {
        is_sorted = true;
        arr.forEach((val, index) => {
            if (arr[index] && arr[index+1] && arr[index] > arr[index+1]) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
                is_sorted = false;
            }
        });
     }
   return arr;
}

module.exports = bubbleSort