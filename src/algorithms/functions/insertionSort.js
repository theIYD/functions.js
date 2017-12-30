/**
 * @function Sort an array using the insertion sort technique
 * @param {Array} arr 
 * @returns {Array}
 */
const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++){
        let value = arr[i], j;
        j = i - 1;
        while(j >= 0 && arr[j] > value){
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = value;
      }
      return arr;
}

module.exports = insertionSort