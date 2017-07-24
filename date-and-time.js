let moment = require("moment");

let fullTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let days = moment().format("DDDo");
let seconds = moment().seconds() + (moment().minute() * 60) + (moment().hours() * 60 * 60);

console.log(`It is ${fullTime}.`);
console.log(`It is ${days} day of the year.`);
console.log(`It is ${seconds} seconds into the day.`);
