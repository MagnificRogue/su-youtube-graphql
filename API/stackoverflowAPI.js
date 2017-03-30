var Promise = require('promise');
var zlib = require('zlib');
var http = require("https");
var url = require('url');

function stackExchange(args, fname){
  return new Promise((resolve, reject) =>{
    console.log("In StackExchange API, switch functionality now");
    console.log(fname);
    var queryUrl = null;
    switch(fname){
        case "advancedSearch":
            queryUrl = advancedSearch(args);
            break;
    }     
    console.log(queryUrl);
    // buffer to store the streamed decompression
    var buffer = [];
    http.get(queryUrl, function (res) {
        // pipe the response into the gunzip to decompress
        var gunzip = zlib.createGunzip();
        res.pipe(gunzip);

        gunzip.on('data', function (data) {
            // decompression chunk ready, add it to the buffer
            buffer.push(data.toString())
        }).on("end", function () {
            // response and decompression complete, join the buffer and return
            console.log("send response data back")
            var data = JSON.parse(buffer.join(""));
            resolve(data);
        }).on("error", function (e) {
            console.log("1.error");
            reject(e);
        })
    }).on('error', function (e) {
        console.log("2.error");
        reject(e)
    });
  });
}

function advancedSearch(args){
    var queryUrl = 'https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow';
    for(var key in args){
        queryUrl += '&' + key + '=' + encodeURIComponent(args[key]);
    }
    console.log(queryUrl);
    return queryUrl
}

module.exports = {
  stackExchange
}