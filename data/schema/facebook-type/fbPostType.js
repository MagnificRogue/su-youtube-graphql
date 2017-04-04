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

const postType = module.exports = new GraphQLObjectType({
	name: 'post',
	description: 'An individual entry in a profile\'s feed. The profile could be a user, page, app, or group.',
	fields: () => ({
		/*----------------------------fields----------------------------------*/
		id:				{type:GraphQLString},
		caption:		{type:GraphQLString,
							resolve: ({id}) => getField({id},'caption')},
		created_time:	{type:GraphQLString,
							resolve: ({id}) => getField({id},'created_time')},
		description:	{type:GraphQLString,
							resolve: ({id}) => getField({id},'description')},
		from:			{type:userType,
							resolve: ({id}) => getField({id},'from')},
		icon:			{type:GraphQLString,
							resolve: ({id}) => getField({id},'icon')},
		link:			{type:GraphQLString,
							resolve: ({id}) => getField({id},'link')},
		message:		{type:GraphQLString,
							resolve: ({id}) => getField({id},'message')},
		name:			{type:GraphQLString,
							resolve: ({id}) => getField({id},'name')},
		object_id:		{type:GraphQLString,
							resolve: ({id}) => getField({id},'object_id')},
		parent_id:		{type:GraphQLString,
							resolve: ({id}) => getField({id},'parent_id')},
		permalink_url:	{type:GraphQLString,
							resolve: ({id}) => getField({id},'permalink_url')},
		picture:		{type:GraphQLString,
							resolve: ({id}) => getField({id},'picture')},
		place:			{type:placeType,
							resolve: ({id}) => getField({id},'place')},
		share:			{type:GraphQLInt,
							resolve: ({id}) => getField({id},'share')},
		source:			{type:GraphQLString,
							resolve: ({id}) => getField({id},'source')},
		status_type:	{type:GraphQLString,
							resolve: ({id}) => getField({id},'status_type')},
		story:			{type:GraphQLString,
							resolve: ({id}) => getField({id},'story')},
		to:				{type:new GraphQLList(userType),
							resolve: ({id}) => getField({id},'to')},
		type:			{type:GraphQLString,
							resolve: ({id}) => getField({id},'type')},
		updated_time:	{type:GraphQLString,
							resolve: ({id}) => getField({id},'updated_time')},
		with_tags:		{type:new GraphQLList(userType),
							resolve: ({id}) => getField({id},'with_tags')},
		/*------------------------------edges--------------------------------*/
		likes:			{ type: new GraphQLList(likeType),
									resolve: ({id}) => getEdge({id},'likes')},
		reactions:		{ type: new GraphQLList(reactionType),
								resolve: ({id}) => getEdge({id},'reactions')},
		comments:		{ type: new GraphQLList(commentType),
								resolve: ({id}) => getEdge({id},'comments')},
		sharedposts:	{ type: new GraphQLList(postType),
								resolve: ({id}) => getEdge({id},'sharedposts')},
		attachments:	{ type: new GraphQLList(attachmentType),
								resolve: ({id}) => getEdge({id},'attachments')}
	})
});

const userType = require('./fbUserType');
const placeType = require('./fbPlaceType');
const likeType = require('./fbLikeType');
const reactionType = require('./fbReactionType');
const commentType = require('./fbCommentType');
const attachmentType = require('./fbAttachmentType');
		