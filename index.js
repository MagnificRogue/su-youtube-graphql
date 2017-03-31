var express = require('express');
var graphQLHTTP = require('express-graphql');
var schema = require('./data/schema/schema.js');

//console.log(schema);

const app = express();

app.use(graphQLHTTP({
	schema,
	graphiql:true,	
}))

app.listen(8080);