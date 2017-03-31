var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../API/fbAPI').getField;
var getEdge = require('../../API/fbAPI').getEdge;

const eventType = module.exports = new GraphQLObjectType({
	name: 'event',
	description: 'Return a facebook event.',
	fields: ()=>({
		/*---------------------------fields----------------------*/
		id:					{ type:GraphQLString },
		name:				{ type:GraphQLString},
		description: 		{ type:GraphQLString,
								resolve: ({id}) => getField({id},'description')},
		end_time:			{ type:GraphQLString,
								resolve: ({id}) => getField({id},'end_time')},
		attending_count:	{ type:GraphQLInt,
								resolve: ({id}) => getField({id},'attending_count')},
		category:			{ type:GraphQLString,
								resolve: ({id}) => getField({id},'category')},
		declined_count:		{ type:GraphQLInt,
								resolve: ({id}) => getField({id},'declined_count')},
		interested_count:	{ type:GraphQLInt,
								resolve: ({id}) => getField({id},'interested_count')},
		maybe_count:		{ type:GraphQLInt,
								resolve: ({id}) => getField({id},'maybe_count')},
		noreply_count:		{ type:GraphQLInt,
								resolve: ({id}) => getField({id},'noreply_count')},
		start_time:			{ type: GraphQLString,
								resolve: ({id}) => getField({id},'start_time')},
		ticket_uri:			{ type: GraphQLString,
								resolve: ({id}) => getField({id},'ticket_uri')},
		timezone:			{ type: GraphQLString,
								resolve: ({id}) => getField({id},'timezone')},
		type:				{ type: GraphQLString,
								resolve: ({id}) => getField({id},'type')},
		updated_time:		{ type: GraphQLString,
								resolve: ({id}) => getField({id},'updated_time')},
		cover:				{ type: coverPhotoType,
								resolve: ({id}) => getField({id},'cover')},
		place:				{ type: placeType,
								resolve: ({id}) => getField({id},'place')},
		parent_group:		{ type: groupType,
								resolve: ({id}) => getField({id},'parent_group')},
								
		/*-----------------------------edges-----------------------------*/
		admins:				{ type: new GraphQLList(userType),
								resolve: ({id}) => getEdge({id},'admins')},
		attending:			{ type: new GraphQLList(userType),
								resolve: ({id}) => getEdge({id},'attending')},
		comments:			{ type: new GraphQLList(commentType),
								resolve: ({id}) => getEdge({id},'comments')},
		declined:			{ type: new GraphQLList(userType),
								resolve: ({id}) => getEdge({id},'declined')},
		interested:			{ type: new GraphQLList(userType),
								resolve: ({id}) => getEdge({id},'interested')},
		maybe:				{ type: new GraphQLList(userType),
								resolve: ({id}) => getEdge({id},'maybe')},
		noreply:			{ type: new GraphQLList(userType),
								resolve: ({id}) => getEdge({id},'noreply')},
		photos:				{ type: new GraphQLList(photoType),
								resolve: ({id}) => getEdge({id},'photos')}
		//pictures:			{ type: }
		//videos:
		//feed:
		
		
	})
});

const coverPhotoType = require('./fbCoverPhotoType');
const placeType = require('./fbPlaceType');
const groupType = require('./fbGroupType');
const userType = require('./fbUserType');
const photoType = require('./fbPhotoType');
const commentType = require('./fbCommentType');