var http=require('http');
var url=require('url');
var querystring = require('querystring').parse;
var request=require('request');



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
    var obj=getAPIResp();

response.end()});

server.listen(5000);

function makeUrlForAPI(curr1,curr2){
    var str='https://exchangeratesapi.io/api/latest?base='+curr1+'&symbols='+curr2;
    return str;
}

function getAPIResp(){
    request(makeUrlForAPI('USD','INR'),function(err,obj){
        if(!err){
            console.log(JSON.parse(obj.body));
            var obj1=JSON.parse(obj.body);
            return obj1;
        }
        else{
            console.error(err);
        }
    });
}

function extract(obj){
    console.log(obj.rates)
}