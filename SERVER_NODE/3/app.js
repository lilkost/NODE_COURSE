const http = require("http");
// http создает сервер
const PORT = 3500;
// получает в аргумент функцию 
// запрос клиента request 
// ответ сервера  response
http.createServer(function(req, res){
    const url = req?.url;
    console.log(url);

    switch(url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main page</h1>');
            break;
        case '/contact':
            console.log('contact page');
            res.write('<h1>Contact page</h1>');
            break;
        default:
            console.log('404');
            res.write('<h1 style="color: red;">404</h1>');
    }

    res.end();

}).listen(PORT); // .listen - задает порт