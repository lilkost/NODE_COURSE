const http = require("http");
// http создает сервер

// получает в аргумент функцию 
// запрос клиента request 
// ответ сервера  response
http.createServer(function(req, res){
    console.log(`url - ${req.url}`, `methods - ${req.method}`);
    console.log('server work 2');
    // заголовок для отдачи браузеру
    res.setHeader("Content-type", "text/html; charset=utf-8;");
    // вписать информацию в ответ
    res.write('<h2>Hello world!</h2>');
    res.write('<p>lorem</p>');
    // end - заканчивает обработку запроса и осылает, что-то в ответ
    res.end();
}).listen(3500); // .listen - задает порт