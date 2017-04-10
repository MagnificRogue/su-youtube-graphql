var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');

const spotifyPlaylistType = module.exports = new GraphQLObjectType({
	name:'spotifyPlaylist',
	fields: () => ({
		collaborative:	{type:GraphQLBoolean},
		description:	{type:GraphQLString},
		external_urls:	{type:GraphQLString,
								resolve:({external_urls})=>{return JSON.stringify(external_urls)}},
		followers:		{type:spotifyFollowerType},
		href:			{type:GraphQLString},
		id:				{type:GraphQLString},
		images:			{type:new GraphQLList(spotifyImageType)},
		name:			{type:GraphQLString},
		owner:			{type:spotifyUserType},
		public:			{type:GraphQLBoolean},
		snapshot_id:	{type:GraphQLString},
		tracks:			{type:new GraphQLList(spotifyTrackType),
							resolve: ({tracks})=> {	return tracks.items}},
		type:			{type:GraphQLString},
		uri:			{type:GraphQLString},
	})
});

const spotifyUserType = new GraphQLObjectType({
	name:'spotifyUser',
	fields: ()=>({
		display_name:	{type:GraphQLString},
		external_urls:	{type:GraphQLString,
								resolve:({external_urls})=>{return JSON.stringify(external_urls)}},
		followers:		{type:spotifyFollowerType},
		href:			{type:GraphQLString},
		id:				{type:GraphQLString},
		images:			{type:new GraphQLList(spotifyImageType)},
		type:			{type:GraphQLString},
		uri:			{type:GraphQLString},
	})
});

const spotifyFollowerType = require('./spotifyFollowerType');
const spotifyImageType = require('./spotifyImageType');
const spotifyTrackType = require('./spotifyTrackType');

