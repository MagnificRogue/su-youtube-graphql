var Promise = require('promise');
var zlib = require('zlib');
var http = require("https");
var url = require('url');

function searchAdvanced(args){
  return new Promise((resolve, reject) =>{
    console.log("In searchAdvanced funciton");
    console.log(args.q);
    var queryUrl = 'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow&q=';
    queryUrl += encodeURIComponent(args.q);          
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
            console.log(data)
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

module.exports = {
  searchAdvanced
}