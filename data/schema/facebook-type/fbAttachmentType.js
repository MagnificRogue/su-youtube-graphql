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

const attachmentType = module.exports = new GraphQLObjectType({
	name: 'attachment',
	description: 'Media content associated with a story or comment. Story attachments are accessed from the following endpoints:',
	fields: () => ({
		description:		{type: GraphQLString},
		description_tags:	{type: new GraphQLList(userType)},
		media:				{type: GraphQLString},
		title:				{type: GraphQLString},
		type:				{type: GraphQLString},
		url:				{type: GraphQLString}
	})
});

const userType = require('./fbUserType');