var express = require('express');
var graphQLHTTP = require('express-graphql');
var schema = require('./data/schema/schema.js');
const cors = require('cors');

//console.log(schema);

const app = express();

app.use('/graphql',cors(), graphQLHTTP({
	schema,
	graphiql:true,	
}))

app.listen(8080);