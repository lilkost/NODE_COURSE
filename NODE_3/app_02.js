const fs = require('fs');

const text = "Азимут підвівся, виплюнув два зуби і прохрипів: \r\n- Пронесло! Це була якась приблудна комета…\r\тільки-но я роззявив рота, щоб відповісти йому, коли знову - торох-торох!\r\n";

// запись файла
const pathToFile = 'd02/n_1.txt';
fs.writeFileSync(pathToFile, text, {encoding: "utf8", flag: "a"});

// запись массива в файл
const text2 = [
    'Азимут підвівся 1',
    'Азимут підвівся 2',
    'Азимут підвівся 3'
];

fs.writeFileSync('./d02/n_2.txt',text2.join('\r\n'), {encoding: "utf8", flag: "w"});