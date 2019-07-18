var http= require('http');
var server= http.createServer(function(req,res){
    res.write('<h1> Welcome to Http server</h1>');
    res.end();
})

server.listen(2300);