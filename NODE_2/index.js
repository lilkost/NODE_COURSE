// модули для рабоыт с файловой системой
const fs = require('fs');

// модуль для работы с путями
const path = require('path');

// проверка сущ. папки

function f01() {
    const pathToDir = './test';

    // existsSync проверяет наличие
    if(fs.existsSync(pathToDir)){
        console.log(true)
    }
    else {
        console.log(false);
    }
}
// f01();

// проверка сущ файла

function f02() {
    const pathToFile = './test/int.dat';

    // existsSync проверяет наличие
    if(fs.existsSync(pathToFile)){
        console.log(true)
    }
    else {
        console.log(false);
    }
}

// f02()

// вычисление размера файла

function f03() {
    const pathToFile = './test/music.mp3';

    // статистическая информация по файлу
    const fileInfo = fs.statSync(pathToFile);
    
    console.log(fileInfo.size);
}

// f03();

// имя и расширения файла
function f04() {
    const pathToFile = './test/music.mp3';

    // получить имя файла
    console.log(path.basename(pathToFile));
    // получить директорию
    console.log(path.dirname(pathToFile));
    // получить расширение
    console.log(path.extname(pathToFile));
    // получить информацию в виде объекта
    console.log(path.parse(pathToFile));
}

// f04();

// Получить файлы и папки в директории

function f05() {
    const pathToDir = './test';

    const allFiles = fs.readdirSync(pathToDir);

    console.log(allFiles);

    let out = '';

    allFiles.forEach(item=>out+=item+'\n');

    console.log(out);
}

// f05();

// получиь абсолютный путь

const directoryPath = path.join(__dirname, 'test');

// __dirname - позволяет увидеть путь к текущему файлу/папке

console.log(directoryPath);
console.log(__dirname);