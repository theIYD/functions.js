/**
 * @function Get ISO-8601 week number of a year
 * @param {*} date: Date Object
 */
const ISO8601WeekNumber = date => {
    let d = new Date(date.valueOf());
    d.setDate(d.getDate() - ((date.getDay() + 6) % 7) + 3);
    let temp = d.valueOf();
    d.setMonth(0, 1);
    if (d.getDay() !== 4) d.setMonth(0, 1 + ((4 - d.getDay()) + 7) % 7);
    return 1 + Math.ceil((temp - d) / 604800000);
}

/**
 * @function Calculate the days between two dates
 * @param {*} date1: First date object
 * @param {*} date2: Second date object 
 */
const differenceBetweenDates = (date1, date2) => {
    let difference =(date2.getTime() - date1.getTime()) / 1000;
    difference /= (60 * 60 * 24);
    return Math.abs(Math.round(difference));
}

module.exports = {ISO8601WeekNumber, differenceBetweenDates}