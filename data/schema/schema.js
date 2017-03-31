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

function wrapper(){
	return {}
}

const testQuery = new GraphQLObjectType({
	
})

const Query = new GraphQLObjectType({
	name: "Query",
	description: 'all api query type',
	fields: () => ({
		stackExchange: {
			type: stackExchangeQueryType,
			resolve:() => wrapper()
		},
		mediaWiki: {
			type: mediaWikiQueryType,
			resolve:() => wrapper()
		}
	})
})

module.exports = new GraphQLSchema({
	query:Query
})
