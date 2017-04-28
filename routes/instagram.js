var express = require('express');
var router = express.Router();
var config = require('../config');
var request = require('request');

var access_token = config.instagram.access_token_key;
var client_id = config.instagram.client_id;
var client_secret = config.instagram.client_secret;

var queryUrl = 'https://api.pinterest.com/v1/me/search/boards/?query=kobe+bryant&access_token=AcXsKcuUy0Pcv1hcgX2IaLbqZezGFLSJHd9YFb9D7ZpX7SA_wgAAAAA&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason'
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
            res.send(JSON.parse(response.body))
        }
   	});
});

module.exports = router;
