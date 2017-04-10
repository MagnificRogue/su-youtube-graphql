var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');

const spotifyArtistType = module.exports = new GraphQLObjectType({
	name:'spotifyArtist',
	fields: () => ({
		external_urls:	{type:GraphQLString,
								resolve:({external_urls})=>{return JSON.stringify(external_urls)}},
		followers:		{type:spotifyFollowerType},
		genres:			{type:new GraphQLList(GraphQLString)},
		href:			{type:GraphQLString},
		id:				{type:GraphQLString},
		images:			{type:new GraphQLList(spotifyImageType)},
		name:			{type:GraphQLString},
		popularity:		{type:GraphQLInt},
		type:			{type:GraphQLString},
		uri:			{type:GraphQLString},
	})
});

const spotifyImageType = require('./spotifyImageType');
const spotifyFollowerType = require('./spotifyFollowerType');