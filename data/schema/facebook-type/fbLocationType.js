var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');

const locationType = module.exports = new GraphQLObjectType({
	name:'location',
	description:'Location of Place',
	fields: () =>({
		city:			{ type: GraphQLString },
		country:		{ type: GraphQLString },
		latitude:		{ type: GraphQLFloat},
		longitude:		{ type: GraphQLFloat},
		state:			{ type: GraphQLString },
		street:			{ type: GraphQLString },
		zip:			{ type: GraphQLString }
	})
});