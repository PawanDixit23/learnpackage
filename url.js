var url= require('url');
var http= require('http');

http.createServer(function(req,res){

    var query=url.parse(req.url, true)
    res.write(query)
    res.end();


}).listen(2400)