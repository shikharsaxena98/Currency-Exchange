var http=require('http');
var url=require('url');
var querystring = require('querystring').parse;
var request=require('request');
var async=require('async');

var curr1='USD';
var curr2='INR';
async.waterfall([
        function(callback){
            var obj1;
            var urlforApi=makeUrlForAPI(curr1,curr2);
            request(urlforApi,function(err,obj){
            obj1=JSON.parse(obj.body).rates;
            console.log(obj1[curr2]);
            console.log("1.Request Completed.");
            
            
        });
        callback(null,obj1);
    }]);


function makeUrlForAPI(curr1,curr2){
    var str='https://exchangeratesapi.io/api/latest?base='+curr1+'&symbols='+curr2;
    return str;
}