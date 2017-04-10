var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');

const spotifyAlbumType = module.exports = new GraphQLObjectType({
	name:'spotifyAlbum',
	fields: () => ({
		/*----------------------simplified------------------*/
		album_type:			{type:GraphQLString},
		artists:			{type:new GraphQLList(spotifyArtistType)},
		available_markets:	{type:new GraphQLList(GraphQLString)},
		external_urls:		{type:GraphQLString,
								resolve:({external_urls})=>{return JSON.stringify(external_urls)}},
		href:				{type:GraphQLString},
		id:					{type:GraphQLString},
		images:				{type: new GraphQLList(spotifyImageType)},
		name:				{type:GraphQLString},
		type:				{type:GraphQLString},
		uri:				{type:GraphQLString},
		/*-----------------------full ------------------------*/
		copyright:			{type:new GraphQLList(spotifyCopyrightType)},
		external_ids:		{type:GraphQLString,
								resolve:({external_ids})=>{return JSON.stringify(external_ids)}},
		genres:				{type:new GraphQLList(GraphQLString)},
		label:				{type:GraphQLString},
		popularity:			{type:GraphQLInt},
		release_date:		{type:GraphQLString},
		tracks:				{type:new GraphQLList(spotifyTrackType),
								resolve: },
	})
});

const spotifyCopyrightType = new GraphQLObjectType({
	name:'spotifyCopyright',
	fields:()=>({
		text:	{type:GraphQLString},
		type:	{type:GraphQLString},
	})
});

const spotifyImageType = require('./spotifyImageType');
const spotifyArtistType = require('./spotifyArtistType');
const spotifyTrackType = require('./spotifyTrackType');
