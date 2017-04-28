var {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');
var getField = require('../../../API/fbAPI').getField;
var getEdge = require('../../../API/fbAPI').getEdge;

const placeType = module.exports = new GraphQLObjectType({
	name:'place',
	description:'return a Facebook place',
	fields: ()=>({
		/*---------------------------fields----------------------*/
		id:				{ type: GraphQLString },
		name:			{ type: GraphQLString },
		location: 		{ type: locationType,
							resolve: ({id}) => getField({id},'location')}
		/*---------------------------no edges---------------------*/
	})
});

const locationType = require('./fbLocationType');
