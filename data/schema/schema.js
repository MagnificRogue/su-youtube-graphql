var {
	GraphQLSchema,
	GraphQLObjectType,

} = require('graphql');

var {
	stackExchangeQueryType
} = require('./stackExchangeSchema.js');

var {
	mediaWikiQueryType
} = require('./mediaWikiSchema.js');

const Query = new GraphQLObjectType({
	name: "Query",
	description: 'all api query type',
	fields: () => ({
		stackExchange: {type: stackExchangeQueryType},
		mediaWiki: {type: mediaWikiQueryType}
	})
})

module.exports = new GraphQLSchema({
	query:Query
})
