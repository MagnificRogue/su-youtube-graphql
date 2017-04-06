var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const experienceType = module.exports = new GraphQLObjectType({
	name:'experience',
	description: 'experience',
	fields: ()=>({
		id: { type: GraphQLString },
		description: { type: GraphQLString },
		from: { type: pageType },
		name: { type: GraphQLString },
		with: { type: new GraphQLList(userType) }		
	})
});

const userType = require('./fbUserType');
const pageType = require('./fbPageType');
//const profileType = require('./fbProfileType');