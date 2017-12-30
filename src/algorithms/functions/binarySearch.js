/**
 * @function Search an element using binary search tehcnique
 * @param {Array} arr - an array 
 * @param {Element} elem - an element
 * @returns {Number} 
 */
const binarySearch = (arr, elem) => {
    let upperBound = arr.length, lowerBound = 0,
    mid = Math.ceil((upperBound - lowerBound) / 2);

  while(elem !== arr[mid]) {
    if(mid === 0 || mid === upperBound) {
      return -1;
    }
    if(elem < arr[mid]) {
      upperBound = mid;
      mid -= Math.ceil((upperBound - lowerBound) / 2);
    } else {
      lowerBound = mid;
      mid += Math.ceil((upperBound - lowerBound) / 2);
    }
  }
  return mid;
}

module.exports = binarySearch