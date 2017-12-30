/**
 * @function Search an element using linear search technique
 * @param {Array} arr - an array
 * @param {Element} elem - an element
 * @returns {Number}
 */
const linearSearch = (arr, elem) => {
    let temp = 0;
    arr.forEach((val,index) => {
      if(val === elem) temp = index; 
      else temp = -1;
    });
    
    return temp;
}

module.exports = linearSearch