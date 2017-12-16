/**
 * @function Get ISO-8601 week number of a year
 * @param {*} date: Date Object
 */
const ISO8601WeekNumber = (date) => {
    let d = new Date(date.valueOf());
    d.setDate(d.getDate() - ((date.getDay() + 6) % 7) + 3);
    let temp = d.valueOf();
    d.setMonth(0, 1);
    if (d.getDay() !== 4) d.setMonth(0, 1 + ((4 - d.getDay()) + 7) % 7);
    return 1 + Math.ceil((temp - d) / 604800000);
}

module.exports = ISO8601WeekNumber