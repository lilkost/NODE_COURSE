const fs = require("fs");

// чтение json файла
const data = fs.readFileSync('./example_2.json', {encoding: "utf8"});
// console.log(data);
let dataObj = JSON.parse(data);
console.log(dataObj)