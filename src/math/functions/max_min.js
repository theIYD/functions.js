/**
 * @function maxOrmin: Get maximum or minimum of an array
 * @param {*} arr 
 * @param {*} task 
 */
const maxOrMin = (arr, task) => {
    if(task) {
        if(task.toUpperCase() === 'MAX') {
            return Math.max(...arr);
        } else if(task.toUpperCase() === 'MIN') {
            return Math.min(...arr);
        } else {
            throw new Error('Error occured');
        }
    } else {
        throw new Error('max or min not defined');
    }
    
}

module.exports = maxOrMin;