/**
 * @function Remove duplicates from an array
 * @param {*} arr 
 */
const removeDuplicate = (arr) => {
    let exists = {}, output = [];
    arr.forEach((val) => {
        if(!exists[val]) {
            output.push(val);
            exists[val] = true;
        }
    });

    return output.sort((a,b) => a-b);
}

module.exports = removeDuplicate