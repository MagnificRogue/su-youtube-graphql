var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const photoType = module.exports = new GraphQLObjectType({
	name: 'photo',
	description: 'Return a facebook photo.',
	fields: () => ({
		id:				{ type: GraphQLString },
		name: 			{ type: GraphQLString },
		created_time:	{ type: GraphQLString },
		backdated_time:	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'backdated_time')},
		height:			{ type: GraphQLInt,
							resolve: ({id}) => getField({id},'height')},
		width:			{ type: GraphQLInt,
							resolve: ({id}) => getField({id},'width')},
		icon: 			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'icon')},
		link:			{ type: GraphQLString,
							resolve: ({id}) => getField({id},'link')},
		page_story_id:	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'page_story_id')},
		picture:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'picture')},
		updated_time:	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'updated_time')},
		backdated_time_granularity:	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'backdated_time_granularity')},	

		images:			{ type: new GraphQLList(platformImageSourceType),
							resolve: ({id}) => getField({id},'images')},
		name_tags: 		{ type: new GraphQLList(entityAtTextRangeType),
							resolve: ({id}) => getField({id},'name_tags')},
		webp_images:	{ type: new GraphQLList(platformImageSourceType),
							resolve: ({id}) => getField({id},'webp_images')},	
		album: 			{ type: albumType,
							resolve: ({id}) => getField({id},'album')},
		from:			{ type: profileType,
							resolve: ({id}) => getField({id},'from')},
		event: 			{ type: eventType,
							resovle: ({id}) => getField({id},'event')},
		place:			{ type: placeType,
							resolve: ({id}) => getField({id},'place')},
		/*-------------------------- edges ---------------------------------- */
		reactions:		{ type: new GraphQLList(reactionType),
								resolve: ({id}) => getEdge({id},'reactions')},
		sharedposts:	{ type: new GraphQLList(postType),
								resolve: ({id}) => getEdge({id},'sharedposts')},
		sponsor_tags:	{ type: new GraphQLList(pageType),
								resolve: ({id}) => getEdge({id},'sponsor_tags')},
		tags:			{ type: new GraphQLList(taggableSubjectType),
								resolve: ({id}) => getEdge({id},'tags')},
		likes:			{ type: new GraphQLList(likeType),
								resolve: ({id}) => getEdge({id},'likes')},
		comments:		{ type: new GraphQLList(commentType),
							resolve: ({id}) => getEdge({id},'comments')}
	})
});
		
const platformImageSourceType = new GraphQLObjectType({
	name:'platformImageSource',
	description: `The different stored representations of the photo. 
	Can vary in number based upon the size of the original photo.`,
	fields: ()=>({
		height:	{ type: GraphQLInt},
		width:	{ type: GraphQLInt},
		source:	{ type: GraphQLString}
	})
});
const taggableSubjectType = new GraphQLObjectType({
	name:'taggableSubject',
	description:'Represents an object can be tagged in some content',
	fields:()=>({
		id:				{type:GraphQLString},
		name:			{type:GraphQLString},
		created_time:	{type:GraphQLString},
		x:				{type:GraphQLFloat},
		y:				{type:GraphQLFloat},
	})
	
});
const entityAtTextRangeType = require('./fbEntityAtTextRangeType');		
const albumType = require('./fbAlbumType');
const userType = require('./fbUserType');
const eventType = require('./fbEventType');
const placeType = require('./fbPlaceType');
const commentType = require('./fbCommentType');
const likeType = require('./fbLikeType');
const reactionType = require('./fbReactionType');
const postType = require('./fbPostType');
const pageType = require('./fbPageType');
const profileType = require('./fbProfileType');

		
		
		
		
		
		
		
		