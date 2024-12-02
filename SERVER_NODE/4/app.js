const http = require("http");
const fs = require("fs");

// http создает сервер
const PORT = 3500;
// получает в аргумент функцию 
// запрос клиента request 
// ответ сервера  response
http.createServer(function(req, res){
    const url = req?.url;
    console.log(url);
    // задание заголовков для отправки
    res.setHeader("Content-type", "text/html; charset=utf-8;");

    switch(url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main page</h1>');
            break;
        case '/contact':
            console.log('contact page');
            // чтение файла для передачи его на клиент
            // res.write('<h1>Contact page</h1>');
            // синхронный код, хуета крч
            let data = fs.readFileSync("./contact.html", {encoding: "utf8", flag: "r"});
            res.write(data);
            break;
        default:
            console.log('404');
            res.write('<h1 style="color: red;">404</h1>');
    }

    res.end();

}).listen(PORT); // .listen - задает порт
