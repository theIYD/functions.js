"use strict";

/**
 * @function Get ISO-8601 week number of a year
 * @param {Object} date: Date Object
 * @returns {Number}
 */
var ISO8601WeekNumber = function ISO8601WeekNumber(date) {
  var d = new Date(date.valueOf());
  d.setDate(d.getDate() - (date.getDay() + 6) % 7 + 3);
  var temp = d.valueOf();
  d.setMonth(0, 1);
  if (d.getDay() !== 4) d.setMonth(0, 1 + (4 - d.getDay() + 7) % 7);
  return 1 + Math.ceil((temp - d) / 604800000);
};

/**
 * @function Calculate the days between two dates
 * @param {Object} date1: First date object
 * @param {Object} date2: Second date object 
 * @returns {Number}
 */
var differenceBetweenDates = function differenceBetweenDates(date1, date2) {
  var difference = (date2.getTime() - date1.getTime()) / 1000;
  difference /= 60 * 60 * 24;
  return Math.abs(Math.round(difference));
};

module.exports = { ISO8601WeekNumber: ISO8601WeekNumber, differenceBetweenDates: differenceBetweenDates };