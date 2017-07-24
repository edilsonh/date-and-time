const chalk = require("chalk");

let moment = require("moment");
let fullTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let days = moment().format("DDDo");
let seconds = moment().seconds() + (moment().minute() * 60) + (moment().hours() * 60 * 60);
let dst = moment().isDST();
let daylight = "is not";
  if (dst) {
    daylight = "is";
  }
let leapYear = moment().isLeapYear();
let year = "is not";
  if (leapYear) {
    year = "is";
  }

console.log(`It is ${chalk.blue(fullTime)}.`);
console.log(`It is ${chalk.magenta(days)} day of the year.`);
console.log(`It is ${chalk.cyan(seconds)} seconds into the day.`);
console.log(`It ${chalk.green(daylight)} during Daylight Savings Time.`);
console.log(`It ${chalk.red(year)} a leap year.`);
