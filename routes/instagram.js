var express = require('express');
var router = express.Router();
var config = require('../config');
var request = require('request');

var access_token = config.instagram.access_token_key;
var client_id = config.instagram.client_id;
var client_secret = config.instagram.client_secret;

var queryUrl = 'https://api.instagram.com/v1/users/self/follows?access_token=' + access_token;
var options = {
    method: 'GET',
    uri: queryUrl,
};

router.get('/', function(req, res, next) {
	console.log(queryUrl);
	request(options, function(error, response){
        if(error) {
            console.log("Reuqest error")
            res.send(error)
        }
        
        if(response) {
            console.log("send response data back")
            res.send(response.body)
        }
   	});
});

module.exports = router;
