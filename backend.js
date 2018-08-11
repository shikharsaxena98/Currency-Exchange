var http = require('http');
var url = require('url');
var querystring = require('querystring').parse;
var request = require('request');
var async = require('async');



var server = http.createServer(function (req, response) {
    response.writeHead(404, {
        "Content-Type": "text/html"
    });
    path = req.url;
    arr = url.parse(path).query;
    ans = querystring(arr);
    console.log(ans);
    var obj1;
    var urlforApi = makeUrlForAPI(ans.curr1, ans.curr2);
    request(urlforApi, function (err, obj) {
        obj1 = JSON.parse(obj.body).rates;
        var value2 = obj1[ans.curr2];
        
        ans.value2=value2*ans.value1;
        var send=JSON.stringify(ans);
        response.write(send);
        response.end();
    });


});
server.listen(5000);
console.log("Server is Running at localhost:5000");

function makeUrlForAPI(curr1, curr2) {
    var str = 'https://exchangeratesapi.io/api/latest?base=' + curr1 + '&symbols=' + curr2;
    return str;
}



function extract(obj) {
    console.log(obj.rates)
}
