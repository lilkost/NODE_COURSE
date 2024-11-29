const fs = require('fs');

// чтение файла
const pathToFile = 'd02/info.txt';
// {encoding: "utf8", flag: 'r', } - не обязательные параметрами
// flag - флаги файловой системой
const data = fs.readFileSync(pathToFile, {encoding: "utf8", flag: 'r' });

// разбить файл на строки
let dataArr = data.split('\r\n');
dataArr = dataArr.filter(line=>line.trim() !== '');
// console.log(dataArr);