/**
 * @function Search an element using linear search technique
 * @param {*} arr 
 * @param {*} elem 
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