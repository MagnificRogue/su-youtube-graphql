var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
	}= require('graphql');
	
const twitterQueryType = require('./twitterSchema');
const fbQueryType = require('./fbSchema');
const stackExchangeQueryType = require('./stackExchangeSchema');
const mediaWikiQueryType = require('./mediaWikiSchema');

function wrapper(){
	return {}
}

const Query = new GraphQLObjectType({
  name   : 'Query',
  description : 'all api query type',
  fields : () =>({
	  twitter:{
				type:twitterQueryType,
				resolve: () => wrapper()
				},
	  facebook:{
				type:fbQueryType,
				resolve: () => wrapper()
				},
		stackExchange: {
				type: stackExchangeQueryType,
				resolve:() => wrapper()
		},
		mediaWiki: {
				type: mediaWikiQueryType,
				resolve:() => wrapper()
		}
  })
});
	

module.exports = new GraphQLSchema({
	query:Query
});

