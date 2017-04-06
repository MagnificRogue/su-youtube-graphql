var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLUnionType
} = require('graphql');


const ImageType = new GraphQLObjectType({

})

const VideoType = new GraphQLUnionType({
	
})

const mediaType = new GraphQLUnionType({
	name: 'media',
	description: 'json structure for media type',
	types: [ImageType, VideoType],
	resolveType(value) {
		if(value instanceof Image){
			return imageType;
		}

		if value instanceof Video{
			return VideoType
		}
	}
})
