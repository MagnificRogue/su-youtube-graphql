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

const videoType = module.exports = new GraphQLObjectType({
	name: 'video',
	description: 'Represents an individual video on Facebook.',
	fields: () => ({
		/*-----------------------------------fields--------------------------*/
		backdated_time_granularity: {type:GraphQLString,
										resolve: ({id}) => getField({id},'backdated_time_granularity')},
		content_category:			{type:GraphQLString,
										resolve: ({id}) => getField({id},'content_category')},
		created_time:				{type:GraphQLString,
										resolve: ({id}) => getField({id},'created_time')},
		description:				{type:GraphQLString},
		embed_html:					{type:GraphQLString,
										resolve: ({id}) => getField({id},'embed_html')},
		id:							{type:GraphQLString},
		backdated_time:				{type:GraphQLString,
										resolve: ({id}) => getField({id},'backdated_time')},
		event:						{type:eventType,
										resolve: ({id}) => getField({id},'event')},
		format:						{type: new GraphQLList(videoFormatType),
										resolve: ({id}) => getField({id},'format')},
		from:						{// profile
										type:userType,
										resolve: ({id}) => getField({id},'from')},
		icon:						{type:GraphQLString,
										resolve: ({id}) => getField({id},'icon')},
		length:						{type:GraphQLFloat,
										resolve: ({id}) => getField({id},'length')},
		permalink_url:				{type:GraphQLString,
										resolve: ({id}) => getField({id},'permalink_url')},
		picture:					{type:GraphQLString,
										resolve: ({id}) => getField({id},'picture')},
		place:						{type:placeType,
										resolve: ({id}) => getField({id},'place')},
		source:						{type:GraphQLString,
										resolve: ({id}) => getField({id},'source')},
		title:						{type:GraphQLString,
										resolve: ({id}) => getField({id},'title')},
		universal_video_id:			{type:GraphQLString,
										resolve: ({id}) => getField({id},'universal_video_id')},
		updated_time:				{type:GraphQLString},
		/*---------------------------------edges----------------------*/
		captions:					{ type: new GraphQLList(videoCaptionType),
										resolve: ({id}) => getEdge({id},'captions')},
		comments:					{ type: new GraphQLList(commentType),
										resolve: ({id}) => getEdge({id},'comments')},
		likes:						{ type: new GraphQLList(likeType),
										resolve: ({id}) => getEdge({id},'likes')},
		reactions:					{ type: new GraphQLList(reactionType),
										resolve: ({id}) => getEdge({id},'reactions')},
		sharedposts:				{ type: new GraphQLList(postType),
										resolve: ({id}) => getEdge({id},'sharedposts')},
		sponsor_tags:				{ type: new GraphQLList(pageType),
										resolve: ({id}) => getEdge({id},'sponsor_tags')},
		tags:						{ type: new GraphQLList(taggableSubjectType2),
										resolve: ({id}) => getEdge({id},'tags')},
		thumbnails:					{ type: new GraphQLList(thumnailType),
										resolve: ({id}) => getEdge({id},'thumbnails')}
	})
});
const taggableSubjectType2 = new GraphQLObjectType({
	name:'taggableSubject2',
	description:'Represents an object can be tagged in some content',
	fields:()=>({
		id:				{type:GraphQLString},
		name:			{type:GraphQLString},
		created_time:	{type:GraphQLString}
	})
});
const videoFormatType = new GraphQLObjectType({
	name:'videoFormat',
	description:'The different formats of the video.',
	fields: ()=>({
		embed_html:	{type:GraphQLString},
		filter:		{type:GraphQLString},
		height:		{type: GraphQLInt},
		picture:	{type:GraphQLString},
		width:		{type:GraphQLInt}
	})
});
const videoCaptionType = new GraphQLObjectType({
	name:'videoCaption',
	description:'Captions for the video.',
	fields: ()=>({
		created_time:	{type:GraphQLInt},
		locale:			{type:GraphQLString},
		locale_name:	{type:GraphQLString},
		url:			{type:GraphQLString}		
	})	
});
const eventType = require('./fbEventType');
const userType = require('./fbUserType');
const placeType = require('./fbPlaceType');
const commentType = require('./fbCommentType');
const likeType = require('./fbLikeType');
const reactionType = require('./fbReactionType');
const postType = require('./fbPostType');
const pageType = require('./fbPageType');
const thumnailType = require('./fbThumbnailType');