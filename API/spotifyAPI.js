var config = require('../config');
var Promise = require('promise');
var SpotifyWebApi = require('spotify-web-api-node');

// this library already return a promise, no need to wrap them in another promise
var spotify = new SpotifyWebApi({
  clientId : config.spotify.client_id,
  clientSecret : config.spotify.client_secret,
  redirectUri : config.spotify.callback
});
spotify.clientCredentialsGrant()
  .then(function(data) {
    spotify.setAccessToken(data.body['access_token']);
  }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
  });

function spotifyAPI(resolveName, args){
	return new Promise((resolve,reject) =>{
		switch(resolveName){
			case 'searchTracks':
				spotify.searchTracks(args['q'],args).then(function(data) {
					//console.log(JSON.stringify(data.body));
					resolve(data.body.tracks.items);
				});
				break;
			
			case 'searchArtists':
				spotify.searchArtists(args['q'],args).then(function(data) {
					//console.log(JSON.stringify(data.body.artists.items));
					resolve(data.body.artists.items);
				});
				break;
			
			case 'searchPlaylists':
				spotify.searchPlaylists(args['q'],args).then(function(data) {
					//console.log(JSON.stringify(data.body.artists.items));
					resolve(data.body.playlists.items);
				});
				break;
				
			default:
				console.log('sorry we can\'t find matching resolve type:' + resolveName);
				resolve(null);
		}
	});
}

module.exports = spotifyAPI;