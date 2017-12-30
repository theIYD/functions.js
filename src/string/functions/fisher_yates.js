/**
 * @function fisherYates: Shuffle an array using the Fisher Yates Algorithm using a while loop.
 * @param {Array} arr: an array
 * @returns {Array} 
 */
const fisherYates = arr => {
    let currentIndex = arr.length
    , temporaryValue
    , randomIndex
    ;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
  return arr;
};

module.exports = {
    fisherYates
}