var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql');

var {	
		getPopular,
		getPhotoset,
		getPhotos,
		getPhotosOf,
		getProfile,
		getGroups,
		getPersonInfo,
		getTree,
		getContacts,
		getFavoritePhotos,
		getGalleries
}= require('../../../API/flickrAPI');

const flickrPersonType = module.exports = new GraphQLObjectType({
	name:'flickrPerson',
	description:'return a Owner information',
	fields:()=>({
		nsid:		{type:GraphQLString},
		favedata:		{type:GraphQLString},
		iconserver:	{type:GraphQLString},
		iconfarm:	{type:GraphQLInt},
		popular:	{type:new GraphQLList(flickrPhotoType),
						description:'Returns a list of popular photos of a given user',
						args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10},
							sort: 		{type:GraphQLString, defaultvalue:"interesting"}},
						resolve:({nsid},args) => getPopular(nsid,args)},
		photoset:	{type:new GraphQLList(flickrPhotosetType),
						description:'Returns the photosets belonging to the specified user.',
						args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10}},
						resolve: ({nsid},args) => getPhotoset(nsid,args)},
		profile:	{type: flickrProfileType,
						resolve: ({nsid}) => getProfile(nsid)},
		groups:		{type: new GraphQLList(flickrGroupType),
						description:'Returns the list of public groups a user is a member of.',
						resolve:({nsid})=>getGroups(nsid)},
		personInfo:	{type: flickrPersonInfoType,
						resolve: ({nsid})=>getPersonInfo(nsid)},
		photos:		{type:new GraphQLList(flickrPhotoType),
						description:'Get a list of public photos for the given user.',
						args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10}},
						resolve: ({nsid},args) => getPhotos(nsid,args)},
		photosOf:	{type:new GraphQLList(flickrPhotoType),
						description:'Returns a list of photos containing a particular Flickr member.',
						args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10}},
						resolve: ({nsid},args) => getPhotosOf(nsid,args)},
		collectionTree:	{type: new GraphQLList(flickrSetType),
							description:'Returns a tree (or sub tree) of collections belonging to a given user.',
							resolve:({nsid})=>getTree(nsid)},
		contacts:		{type: new GraphQLList(flickrPersonType),
							args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10}},
						resolve: ({nsid},args) => getContacts(nsid,args)},		
		favoritePhotos:	{type: new GraphQLList(flickrPhotoType),
							args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10}},
						resolve: ({nsid},args) => getFavoritePhotos(nsid,args)},
		gallaries:		{type: new GraphQLList(flickrGalleryType),
							description:'Return the list of galleries created by a user. Sorted from newest to oldest.',
							args: {
							page: 		{type:GraphQLInt, defaultvalue:1},
							per_page:	{type:GraphQLInt, defaultvalue:10}},
						resolve: ({nsid},args) => getGalleries(nsid,args)},
	})
});

const flickrPersonInfoType = new GraphQLObjectType({
	name:'flickrPersonInfo',
	description:'Get information about a user.',
	fields: ()=>({
		ispro:			{type:GraphQLString},
		can_buy_pro:	{type:GraphQLString},
		path_alias:		{type:GraphQLString},
		expire:			{type:GraphQLString},
		username:		{type:GraphQLString,
							resolve:({username})=>{return username._content}},
		realname:		{type:GraphQLString,
							resolve:({realname})=>{return realname._content}},
		mbox_sha1sum:	{type:GraphQLString,
							resolve:({mbox_sha1sum})=>{return mbox_sha1sum._content}},
		location:		{type:GraphQLString,
							resolve:({location})=>{return location._content}},
		timezone:		{type:GraphQLString,
							resolve:({timezone})=>{return timezone._label}},
		description:	{type:GraphQLString,
							resolve:({description})=>{return description._content}},
		photosurl:		{type:GraphQLString,
							resolve:({photosurl})=>{return photosurl._content}},
		profileurl:		{type:GraphQLString,
							resolve:({profileurl})=>{return profileurl._content}},
		mobileurl:		{type:GraphQLString,
							resolve:({mobileurl})=>{return mobileurl._content}},
		photos_count:	{type:GraphQLString,
							resolve:({photos})=>{return photos.count._content}},
		firstdatetaken: {type:GraphQLString,
							resolve:({photos})=>{return photos.firstdatetaken._content}},
		firstdate:		{type:GraphQLString,
							resolve:({photos})=>{return photos.firstdate._content}},
	})
	
})

const flickrSetType = new GraphQLObjectType({
	name:'flckrSetType',
	fields: () => ({
		id:				{type:GraphQLString},
		title:			{type:GraphQLString},
		description:	{type:GraphQLString}
	})
});

const flickrPhotosetType = require('./flickrPhotosetType');
const flickrPhotoType = require('./flickrPhotoType');
const flickrProfileType = require('./flickrProfileType');
const flickrGroupType = require('./flickrGroupType');
const flickrGalleryType = require('./flickrGalleryType');