var {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} = require('graphql');

const coverPhotoType = module.exports = new GraphQLObjectType({
	name: 'coverPhoto',
	description: 'Return a facebook user\'s cover photo.',
	fields: () => ({
		id:			{ type: GraphQLString },
		offset_y: 	{ type:GraphQLInt },
		source:		{ type: GraphQLString }
	})
});
