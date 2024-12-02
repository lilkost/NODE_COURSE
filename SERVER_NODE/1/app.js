const http = require("http");
// http создает сервер

// получает в аргумент функцию 
// запрос клиента request 
// ответ сервера  response
http.createServer(function(req, res){
    console.log('server work');
    // end - заканчивает обработку запроса и осылает, что-то в ответ
    res.end('1');
}).listen(3500); // .listen - задает порт