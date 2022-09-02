const {DateTime}= require("luxon");
const now=DateTime.now();
console.log(now.toLocaleString());