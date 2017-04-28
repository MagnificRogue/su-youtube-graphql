var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const profilePictureType = module.exports = new GraphQLObjectType({
	name: 'profilePic',
	description: 'Profile Picture.',
	fields: () => ({
		height:	{type:GraphQLInt},
		url:	{type:GraphQLString},
		width:	{type:GraphQLInt}
	})
});