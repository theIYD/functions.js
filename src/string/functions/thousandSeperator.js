/**
 * @function Seperate thousands using commas
 * @param {*} num 
 */
const thousandSeperator = (num) => {
    let parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

module.exports = thousandSeperator