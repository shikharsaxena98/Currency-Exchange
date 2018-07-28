var http=require('http');
var url=require('url');
var querystring = require('querystring').parse;



var server=http.createServer(function(request,response){
    response.writeHead(404, {"Content-Type":"text/html"});
    response.write("Request Made");
    path=request.url;
    arr=url.parse(path).query;
    ans=querystring(arr);
    response.write("<br/>")
    response.write(ans.value1);
    response.write("<br/>")
    response.write(ans.curr1);
    response.write("<br/>")
    response.write(ans.curr2);
    response.write("<br/>")

response.end()});

server.listen(5000);

function