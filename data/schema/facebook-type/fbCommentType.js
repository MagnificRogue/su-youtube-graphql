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

const commentType = module.exports = new GraphQLObjectType({
	name:'comment',
	description:`A comment can be made on various types of content
	on Facebook. Most Graph API nodes have a /comments edge that 
	lists all the comments on that object. The /{comment-id} node
	returns a single comment.`,
	fields: ()=>({
		/*-----------------------------------fields------------------------------*/
		id:				{ type: GraphQLString},
		attachment:		{ type: attachmentType,
							resolve: ({id}) => getField({id},'attachment')},
		comment_count:	{ type: GraphQLInt,
							resolve: ({id}) => getField({id},'comment_count')},
		created_time:	{ type: GraphQLString,
							resolve: ({id}) => getField({id},'created_time')},
		from:			{ type: userType,
							resolve: ({id}) => getField({id},'from')},
		like_count:		{ type: GraphQLInt,
							resolve: ({id}) => getField({id},'like_count')},
		message:		{ type: GraphQLString,
							resolve: ({id}) => getField({id},'message')},
		parent:			{ type: commentType,
							resolve: ({id}) => getField({id},'parent')},
		/*----------------------------------edges-------------------------------*/
		likes:			{ type: new GraphQLList(likeType),	
								resolve: ({id}) => getEdge({id},'likes')},
		comments:		{ type: new GraphQLList(commentType),
								resolve: ({id}) => getEdge({id},'comments')}
	})
});

const userType = require('./fbUserType');
const entityAtTextRangeType = require('./fbEntityAtTextRangeType');
const likeType = require('./fbLikeType');
const attachmentType = require('./fbAttachmentType');
