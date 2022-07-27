var http = require('http'); //permite criar aplicacoes web

http.createServer(function(req,res){

    res.end("Olá");


}).listen(8081)

console.log("O Servidor rodando.")