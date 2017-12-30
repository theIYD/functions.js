/**
 * @function Generate a UUID i.e universally unique identifier
 * @returns {String}
 */
const uuid = () => {
    let date = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (val) => {
        let r = (date + Math.random()*16) % 16 | 0;
        date = Math.floor(date/16);
        return (val=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

module.exports = uuid