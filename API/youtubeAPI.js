var config = require('../config');
var Promise = require('promise');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  config.youtube.client_id,
  config.youtube.client_secret,
  config.youtube.callback
);

oauth2Client.setCredentials({
  access_token: config.youtube.access_token,
});

var youtube = google.youtube({
	version: 'v3',
	auth:oauth2Client
});

function youtubeAPI(resolveName, id, args){
	return new Promise((resolve,reject) =>{
		
		switch(resolveName){
			case 'search':
				youtube.search.list({
					part: 				'id,snippet',
					key: 				config.youtube.api_key,
					maxResults:			args['maxResults'],
					order:				args['order'],
					publishedAfter:		args['publishedAfter'],
					publishedBefore:	args['publishedBefore'],
					q: 					args['q'],
					type:				args['type'],
				  }, (error, data) => {
					if (error){
						console.log(error);
						reject(error);
					}else{
						//console.log(data);
						resolve(data.items);
					}
				  });
				break;

			case 'playlist':
				youtube.playlists.list({
					part: 'contentDetails,id,player,snippet,status',
					id: id
				}, function (err, data) {
					if (err){
						console.log(err);
						reject(err);
					}else{
						//console.log(data.items);
						resolve(data.items);
					}
				});
				break;
				
			case 'channel':
				youtube.channels.list({
					part: 'auditDetails, brandingSettings,contentDetails, contentOwnerDetails,id,invideoPromotion,snippet,statistics,status,topicDetails',
					id: id
				}, function (err, data) {
					if (err){
						console.log(err);
						reject(err);
					}else{
						console.log(data.items);
						resolve(data.items);
					}
				});
				break;
		}				
	})
}

module.exports = youtubeAPI;