var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');

var spotifyAPI = require('./../../API/spotifyAPI');
	
const spotifyQueryType = module.exports = new GraphQLObjectType({
	name:'spotifyQuery',
	description:'Query spotify albums, tracks, artists or playlist by keywords or other criteria',
	fields: () => ({
		searchTracks:{
			type: 	new GraphQLList(spotifyTrackType),
			args:	{q:		{
							type:GraphQLString,
							description:`The search query\'s keywords (and optional field filters and operators), 
							for example: q=roadhouse%20blues; q= q="roadhouse&20blues"; q=roadhouse%20NOT%20blues;
							q=roadhouse%20OR%20blues; q=album:gold%20artist:abba&type=album; 
							q=lil%20genre:%22southern%20hip%20hop%22&type=artist`
							},
					limit:	{
							type:GraphQLInt,
							defaultvalue:20,
							description:'Optional. The maximum number of results to return. Default: 20. Minimum: 1. Maximum: 50. ',
							}, 
					offset: {
							type:GraphQLInt,
							defaultvalue:0,
							description:`Optional. The index of the first result to return. Default: 0 (i.e., the first result).
							Maximum offset: 100.000. Use with limit to get the next page of search results.`
							}
					},
			resolve:(_,args) =>spotifyAPI( resolveName='searchTracks',args = args)},
			
		searchArtists:{
			type: new GraphQLList(spotifyArtistType),
			args:	{q:		{
							type:GraphQLString,
							description:`The search query\'s keywords (and optional field filters and operators), 
							for example: q=roadhouse%20blues; q= q="roadhouse&20blues"; q=roadhouse%20NOT%20blues;
							q=roadhouse%20OR%20blues; q=album:gold%20artist:abba&type=album; 
							q=lil%20genre:%22southern%20hip%20hop%22&type=artist`
							},
					limit:	{
							type:GraphQLInt,
							defaultvalue:20,
							description:'Optional. The maximum number of results to return. Default: 20. Minimum: 1. Maximum: 50. ',
							}, 
					offset: {
							type:GraphQLInt,
							defaultvalue:0,
							description:`Optional. The index of the first result to return. Default: 0 (i.e., the first result).
							Maximum offset: 100.000. Use with limit to get the next page of search results.`
							}
					},
			resolve:(_,args) =>spotifyAPI( resolveName='searchArtists',args = args)},
			
		searchPlaylists:{
			type: new GraphQLList(spotifyPlaylistType),
			args:	{q:		{
							type:GraphQLString,
							description:`The search query\'s keywords (and optional field filters and operators), 
							for example: q=roadhouse%20blues; q= q="roadhouse&20blues"; q=roadhouse%20NOT%20blues;
							q=roadhouse%20OR%20blues; q=album:gold%20artist:abba&type=album; 
							q=lil%20genre:%22southern%20hip%20hop%22&type=artist`
							},
					limit:	{
							type:GraphQLInt,
							defaultvalue:20,
							description:'Optional. The maximum number of results to return. Default: 20. Minimum: 1. Maximum: 50. ',
							}, 
					offset: {
							type:GraphQLInt,
							defaultvalue:0,
							description:`Optional. The index of the first result to return. Default: 0 (i.e., the first result).
							Maximum offset: 100.000. Use with limit to get the next page of search results.`
							}
					},
			resolve:(_,args) =>spotifyAPI( resolveName='searchPlaylists',args = args)},
	})
});

const spotifyTrackType = require('./spotify-type/spotifyTrackType');
const spotifyArtistType = require('./spotify-type/spotifyArtistType');
const spotifyPlaylistType = require('./spotify-type/spotifyPlaylistType');