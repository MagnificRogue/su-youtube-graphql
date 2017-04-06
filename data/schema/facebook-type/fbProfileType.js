var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLUnionType
} = require('graphql');


const userType = require('./fbUserType');
const pageType = require('./fbPageType');

const resolveType = (data) => {
	if (data.first_name){
		return userType;
	}else{
		return pageType;
	}
};

const fbProfileType = module.exports = new GraphQLUnionType({
	name: 'fbProfile',
	description: `a list of profile node: User,Page,Group,Event,Application
		can be keep working on e.g. userType|pageType|groupType|eventType|`,
	types: [userType, pageType],
	resolveType: resolveType
});





