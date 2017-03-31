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

const userType = module.exports = new GraphQLObjectType({
	name: 'fbUser',
	description: 'Return a facebook user.',
	fields: () => ({
		/*-------------------------BASIC FIELDS------------------------*/
		id:					{ type: GraphQLString },
		name:				{ type: GraphQLString },
		about:				{ type: GraphQLString,
							resolve: ({id}) => getField({id},'about')},
		birthday:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'birthday')},
		email:				{ type: GraphQLString,
							resolve: ({id}) => getField({id},'email')		},
		first_name:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'first_name')},
		gender:				{ type: GraphQLString,
							resolve: ({id}) => getField({id},'gender')	},
		last_name:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'last_name')},
		link:				{ type: GraphQLString,
							resolve: ({id}) => getField({id},'link')},
		locale:				{ type: GraphQLString,
							resolve: ({id}) => getField({id},'locale')},
		middle_name:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'middle_name')},
		name_format:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'name_format')},
		political:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'political')},
		quotes:				{ type: GraphQLString,
							resolve: ({id}) => getField({id},'quotes')},
		relationship_status:{ 
							type: GraphQLString,
							resolve: ({id}) => getField({id},'relationship_status')},
		religion:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'religion')},
		updated_time:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'updated_time')},
		website:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'website')},	
							
		age_range:			{ type: ageType,
							resolve: ({id}) => getField({id},'age_range')},
		cover: 				{ type: coverPhotoType,
							resolve: ({id}) => getField({id},'cover')},
		currency: 			{ type: currencyType,
							resolve: ({id}) => getField({id},'currency')},
		devices:			{ type: new GraphQLList(deviceType),
							resolve: ({id}) => getField({id},'devices')},
		education:			{ type: new GraphQLList(educationExpType),
							resolve: ({id}) => getField({id},'education')},
		favorite_athletes:	{ 
							type: new GraphQLList(experienceType),
							resolve: ({id}) => getField({id},'favorite_athletes')},
		favorite_teams:		{ type: new GraphQLList(experienceType),
							resolve: ({id}) => getField({id},'favorite_teams')},
		hometown:			{ type: pageType,
							resolve: ({id}) => getField({id},'hometown')},
		inspirational_people:	{ 
							type: new GraphQLList(experienceType),
							resolve: ({id}) => getField({id},'inspirational_people')},
		interested_in:		{ type: new GraphQLList(GraphQLString),
							resolve: ({id}) => getField({id},'interested_in')},
		languages:			{ type: new GraphQLList(experienceType),
							resolve: ({id}) => getField({id},'languages')},
		location:			{ type: pageType,
							resolve: ({id}) => getField({id},'location')},
		meeting_for:		{ type: new GraphQLList(GraphQLString),
							resolve: ({id}) => getField({id},'meeting_for')},
		significant_other:	{ 
							type: userType,
							resolve: ({id}) => getField({id},'significant_other')},
		sports:				{ type: new GraphQLList(experienceType),
							resolve: ({id}) => getField({id},'sports')},
		work:				{ type: new GraphQLList(experienceType),
							resolve: ({id}) => getField({id},'work')},
							
		/*------------------------------------EDGES---------------------------------*/
		albums:					{ type: new GraphQLList(albumType),
									resolve: ({id}) => getEdge({id},'albums')},
		photos:					{ type: new GraphQLList(photoType),
									resolve: ({id}) => getEdge({id},'photos')},
		events:					{ type: new GraphQLList(eventType),
									resolve: ({id}) => getEdge({id},'events')},
		locations:				{ type: new GraphQLList(locationType),
									resolve: ({id}) => getEdge({id},'locations')},
		groups:					{ type: new GraphQLList(groupType),
									resolve: ({id}) => getEdge({id},'groups')},	
		family:					{ type: new GraphQLList(userType),
									resolve: ({id}) => getEdge({id},'family')},	
		friends:				{ type: new GraphQLList(userType),
									resolve: ({id}) => getEdge({id},'friends')},
		likes:					{ type: new GraphQLList(likeType),
									resolve: ({id}) => getEdge({id},'likes')}
		/*	
		picture:	{},
		videos:	{},
		feed:	{},*/
	})
});

const ageType = new GraphQLObjectType({
	name: 'age',
	description: 'Return a facebook user\'s age range.',
	fields: () => ({
		max:	{ type: GraphQLInt },
		min: 	{ type: GraphQLInt }
	})
});

const currencyType = new GraphQLObjectType({
	name: 'currency',
	description: 'Return a facebook user\'s local currency information.',
	fields: () => ({
		usd_exchange: { type: GraphQLFloat},
		usd_exchange_inverse: { type: GraphQLFloat},
		user_currency: { type: GraphQLString }
	})
});

const deviceType = new GraphQLObjectType({
	name:'device',
	description: 'return a list of devices the person is using. thiw will return only IOS and Android devices',
	fields: ()=>({
		hardware: { type: GraphQLString },
		os: { type: GraphQLString }
	})
});

const educationExpType = new GraphQLObjectType({
	name:'educationExp',
	description:'the person\'s education',
	fields: ()=>({
		id: 	{ type: GraphQLString },
		classes: { type: new GraphQLList(experienceType) },
		concentration:	{ type: new GraphQLList(pageType) },
		degree:	{ type: pageType },
		school:	{type: pageType },
		type:	{type: GraphQLString },
		with:	{ type: new GraphQLList(userType) },
		year:	{ type: new GraphQLList(pageType) }		
	})
});

//write require at the bottom to solve the circular dependency problem
const experienceType = require('./fbExpType');
const pageType = require('./fbPageType');
const albumType = require('./fbAlbumType');
const photoType = require('./fbPhotoType');
const eventType = require('./fbEventType');
const coverPhotoType = require('./fbCoverPhotoType');
const locationType = require('./fbLocationType');
const groupType = require('./fbGroupType');
const likeType = require('./fbLikeType');
