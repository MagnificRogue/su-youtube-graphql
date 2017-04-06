var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql');

var {
	instagram
} = require('./../../API/instagramAPI');

var {
	usersType,
	userInfoType,
	usersSearchType,
} = require('./instagramSchema/usersSchema');

var {
	usersSelfFollowsType,
	usersSelfFollowedByType,
	usersSelfRequestedByType,
	usersRelationshipType,
} = require('./instagramSchema/relationshipsSchema');

const instagramQueryType = new GraphQLObjectType({
	name: 'instagramQuery',
	description: 'instagram api call',
	fields: () => ({
		usersSelf : {
			type: usersType,
			resolve:(_, args) => instagram(args, "usersSelf")
		},
		users : {
			type: usersType,
			args:{
				user_id: {
					type: GraphQLInt,
					description: "User Id"
				},
			},
			resolve:(_, args) => instagram(args, "users")
		},
		usersSearch : {
			type: usersSearchType,
			args:{
				q: {
					type: GraphQLString,
					description: "A query string"
				},
				count: {
					type: GraphQLInt,
					description: "Number of users to return"
				}
			},
			resolve:(_, args) => instagram(args, "usersSearch")
		},
		usersSelfFollows: {
			type: usersSelfFollowsType,
			resolve:(_, args) => instagram(args, "usersSelfFollows")
		},
		usersSelfFollowedBy:{
			type: usersSelfFollowedByType,
			resolve:(_, args) => instagram(args, "usersSelfFollowedBy")
		},
		usersSelfRequestedBy:{
			type: usersSelfRequestedByType,
			resolve:(_, args) => instagram(args, "usersSelfRequestedBy")
		},
		usersRelationship:{
			type: usersRelationshipType,
			args:{
				user_id: {
					type: GraphQLInt,
					description: "User Id"
				}
			},
			resolve:(_, args) => instagram(args, "usersRelationship")
		},
	})
})

module.exports = {
	instagramQueryType
}
