/**
 * @function Escape characters from string
 * @param {*} str 
 */
const escape = (str) => {
    if(!str) {
        throw new Error('error')
    } else {
        let map = {'&': '&amp;','<': '&lt;','>': '&gt;','"': '&quot;',"'": '&#039;'};
        return str.toString().replace(/[&<>"']/g, (m) => map[m]);
    }
}

module.exports = escape