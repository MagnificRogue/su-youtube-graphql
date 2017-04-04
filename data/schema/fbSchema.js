var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var search = require('../../API/fbAPI').search;

const fbQueryType =  new GraphQLObjectType({
	name:'fbQuery',
	description:'Query user, page, event, group, place, placetopic.',
	fields: () => ({
		queryUser:{
			type: new GraphQLList(userType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'user')
		},
		queryPage:{
			type: new GraphQLList(pageType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'page')
		},
		queryPlace: {
			type: new GraphQLList(placeType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'place')
		},
		queryEvent: {
			type: new GraphQLList(eventType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'event')
		},
		queryGroup: {
			type: new GraphQLList(groupType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'group')
		},
		queryPlaceTopic:{
			type: new GraphQLList(placeTopicType),
			args:{ q: { type:GraphQLString } },
			resolve: (_,args) => search(args,'placetopic')
		}
	})
});

const userType = require('./facebook-type/fbUserType');
const pageType = require('./facebook-type/fbPageType');
const eventType = require('./facebook-type/fbEventType');
const placeType = require('./facebook-type/fbPlaceType');
const groupType = require('./facebook-type/fbGroupType');
const placeTopicType = require('./facebook-type/fbPlaceTopicType');

module.exports = fbQueryType;
