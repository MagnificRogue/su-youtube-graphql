var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var graphqlHTTP = require('express-graphql');
var schema = require('./data/schema/schema.js')
const cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/graphql', cors(), graphqlHTTP((req) => ({
  schema:schema,
  graphiql: true,
  context:req.body
})));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
	console.log(req.body);
  // set locals, only providing error in development
  res.status(err.status || 500);
	return res.json(err)
});

module.exports = {
  app
};

