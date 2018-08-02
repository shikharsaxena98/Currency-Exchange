var http = require('http');
var url = require('url');
var querystring = require('querystring').parse;
var request = require('request');
var async = require('async');



var server = http.createServer(function (req, response) {
    response.writeHead(404, {
        "Content-Type": "text/html"
    });
    response.write("Request Made");
    path = req.url;
    arr = url.parse(path).query;
    ans = querystring(arr);
    response.write("<br/>")
    response.write(ans.value1);
    response.write("<br/>")
    response.write(ans.curr1);
    response.write("<br/>")
    response.write(ans.curr2);
    response.write("<br/>");
    var urlforApi = makeUrlForAPI('USD', 'INR');
    console.log(urlforApi);
        var obj1;
        var urlforApi = makeUrlForAPI(ans.curr1, ans.curr2);
        request(urlforApi, function (err, obj) {
            obj1 = JSON.parse(obj.body).rates;
            var value2 = obj1[ans.curr2];
            value2=value2.toString();
            console.log("1.Request Completed.");
            console.log(value2);
            response.write(value2);
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
