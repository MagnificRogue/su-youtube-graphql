var Promise = require('promise');
var request = require('request');
var config = require('../config');

var access_token = config.instagram.access_token_key;

function instagram(args, fname){
    return new Promise((resolve, reject) =>{
        console.log("In Instagram API, switch functionality now");
        console.log(fname);
        var queryUrl = "https://api.instagram.com/v1";
        switch(fname){
            case "usersSelf":
                queryUrl = usersSelf(queryUrl);
                break;
            case "users":
                queryUrl = users(args, queryUrl);
                break;
            case "usersSearch":
                queryUrl = usersSearch(args, queryUrl);
                break;
            case "usersSelfFollows":
                queryUrl = usersSelfFollows(queryUrl);
                break;
            case "usersSelfFollowedBy":
                queryUrl = usersSelfFollowedBy(ueryUrl);
                break;
            case "usersSelfRequestedBy":
                queryUrl = usersSelfRequestedBy(queryUrl);
                break;
            case "usersRelationship":
                queryUrl = usersRelationship(args, queryUrl);
                break;
        }     

        var options = {
            method: 'GET',
            uri: queryUrl,
        };

        request(options, function(error, response){
            if(error) {
                console.log("Reuqest error")
                reject(error);
            }
            
            if(response) {
                console.log("send response data back")
                console.log(response.body)
                resolve(JSON.parse(response.body)); 
            }
        });
    });
}

function usersSelf(queryUrl){
    queryUrl += ('/users/self/?access_token=' + access_token);
    console.log(queryUrl);
    return queryUrl
}

function users(args, queryUrl){
    queryUrl += '/users/' + args.user_id + '/?access_token=' + access_token;
    console.log(queryUrl);
    return queryUrl
}

function usersSearch(args, queryUrl){
    queryUrl += '/users/search?access_token=' + access_token;
    for(var key in args){
        queryUrl += '&' + key + '=' + encodeURIComponent(args[key]);
    }
    console.log(queryUrl);
    return queryUrl
}

function usersSelfFollows(queryUrl){
    queryUrl += ('/users/self/follows?access_token=' + access_token);
    console.log(queryUrl);
    return queryUrl
}

function usersSelfFollowedBy(queryUrl){
    queryUrl += ('/users/self/followed-by?access_token=' + access_token);
    console.log(queryUrl);
    return queryUrl
}

function usersSelfRequestedBy(queryUrl){
    queryUrl += ('/users/self/requested-by?access_token=' + access_token);
    console.log(queryUrl);
    return queryUrl
}

function usersRelationship(args, queryUrl){
    queryUrl += ('/users/' + args.user_id + "/relationship?access_token=" + access_token);
    console.log(queryUrl);
    return queryUrl
}


module.exports = {
  instagram
}
