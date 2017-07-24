let moment = require("moment");

let fullTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let days = moment().format("DDDo");

console.log(`It is ${fullTime}.`);
console.log(`It is ${days} day of the year.`);
