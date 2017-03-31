var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../API/fbAPI').getField;
var getEdge = require('../../API/fbAPI').getEdge;

const likeType = module.exports = new GraphQLObjectType({
	name:'like',
	description:`this reference describes the /likes edge that is common 
	to multiple Graph API nodes. The structure and operations are the 
	same for each node.`,
	fields: ()=>({
		name: 	{ type: GraphQLString },
		id:		{ type: GraphQLString }
	})
});

const userType = require('./fbUserType');
const pageType = require('./fbPageType');