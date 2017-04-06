var config = require('../config');
var Promise = require('promise');
var Flickr = require("node-flickr")
var keys = {
      "api_key": config.flickr.consumer_key,
      "secret": config.flickr.consumer_secret,
	  "user_id": config.flickr.user_id,
	  "access_token": config.flickr.access_token,
	  "access_token_secret": config.flickr.access_token_secret
	  };
var flickr = new Flickr(keys);

function searchPhotos(args){
	//console.log(args);
	return new Promise((resolve,reject) =>{
		flickr.get("photos.search", args, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.photos.photo);
			}
		});	
	});		
}

function searchGroups(args){
	//console.log(args);
	return new Promise((resolve,reject) =>{
		flickr.get("groups.search", args, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.groups.group);
			}
		});	
	});		
}

function recentPhotos(args){
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getRecent",args,function(err,result){
			if(err){
				console.log(err);
				reject(err);
			}else{
				resolve(result.photos.photo);
			}
		});
	});
}

function searchPlaces(args){
	return new Promise((resolve,reject) =>{
		flickr.get("places.find",args,function(err,result){
			if(err){
				console.log(err);
				reject(err);
			}else{
				resolve(result.places.place);
			}
		});
	});
}

function getTopPlaces(args){
	return new Promise((resolve,reject) =>{
		flickr.get("places.getTopPlacesList",args,function(err,result){
			if(err){
				console.log(err);
				reject(err);
			}else{
				resolve(result.places.place);
			}
		});
	});
}
function searchPlacesBoundingBox(args){
	return new Promise((resolve,reject) =>{
	flickr.get("places.placesForBoundingBox	",args,function(err,result){
		if(err){
			console.log(err);
			reject(err);
		}else{
			resolve(result.places.place);
		}
		});
	});
}

function searchUser(args){
	return new Promise((resolve,reject) =>{
	flickr.get("people.findByUsername",args,function(err,result){
		if(err){
			console.log(err);
			reject(err);
		}else{
			resolve(result.user);
		}
		});
	});
}

function getContexts(photo_id,param){
	return new Promise((resolve,reject) =>{
		if (param==='stream'){
			flickr.get("photos.getContext", {"photo_id":photo_id}, function(err, result){
				if (err) {
					console.error(err);
					reject(err);
				}else{
					resolve(result);
				}
			});
		}else{
			flickr.get("photosets.getContext", {"photo_id":photo_id}, function(err, result){
				if (err) {
					console.error(err);
					reject(err);
				}else{
					resolve(result);
				}
			});
		}
	});		
}

function getExif(photo_id){
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getExif", {"photo_id":photo_id}, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photo.exif);
				resolve(result.photo.exif);
			}
		});
		
	});		
}

function getContactsPhoto(user_id){
	//console.log(args);
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getContactsPublicPhotos", {"user_id":user_id}, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result);
			}
		});	
	});		
}

function getInfo(photo_id){
	//console.log(args);
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getInfo", {"photo_id":photo_id}, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photo);
				resolve(result.photo);
			}
		});	
	});		
}

function getPopular(nsid,args){
	args["user_id"] = nsid;
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getPopular", args, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				resolve(result.photos.photo);
			}
		});	
	});		
}

function getFavoritePhotos(nsid,args){
	args["user_id"] = nsid;
	return new Promise((resolve,reject) =>{
		flickr.get("favorites.getPublicList", args, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				resolve(result.photos.photo);
			}
		});	
	});		
}

function getFavoritePeople(photo_id){
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getFavorites", {"photo_id":photo_id}, function(err, result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.photo.person);
			}
		});	
	});	
}

function getSizes(photo_id){
	return new Promise((resolve,reject) =>{
		flickr.get("photos.getSizes",{"photo_id":photo_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.sizes.size);
			}
		});
	});
}

function getComments(photo_id,args){
	args["photo_id"] = photo_id;
	return new Promise((resolve,reject) =>{
		flickr.get("photos.comments.getList",args, function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.comments.comment);
			}
		});
	});
}

function getLocations(photo_id){
	return new Promise((resolve,reject) =>{
		flickr.get("photos.geo.getLocation",{"photo_id":photo_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.photo.location);
			}
		});
	});
}

function getPeople(photo_id){
	return new Promise((resolve,reject) =>{
		flickr.get("photos.people.getList",{"photo_id":photo_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.photos.photo);
				resolve(result.people.person);
			}
		});
	});
}

function getPhotoset(user_id,args){
	args['user_id'] = user_id;
	return new Promise((resolve,reject) =>{
		flickr.get("photosets.getList",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				resolve(result.photosets.photoset);
			}
		});
	});
}

function getPhotos(user_id,args){
	args['user_id'] = user_id;
	return new Promise((resolve,reject) =>{
		flickr.get("people.getPublicPhotos",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				resolve(result.photos.photo);
			}
		});
	});
}

function getContacts(user_id,args){
	args['user_id'] = user_id;
	return new Promise((resolve,reject) =>{
		flickr.get("contacts.getPublicList",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				console.log(result)
				resolve(result.contacts.contact);
			}
		});
	});
}

function getPhotosOf(user_id,args){
	args['user_id'] = user_id;
	return new Promise((resolve,reject) =>{
		flickr.get("people.getPhotosOf",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				resolve(result.photos.photo);
			}
		});
	});
}

function getPhotosetComments(photoset_id){
	//console.log(photoset_id);
	return new Promise((resolve,reject) =>{
		flickr.get("photosets.comments.getList",{"photoset_id":photoset_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.comments.comment);
			}
		});
	});
}

function getPlaceInfo(place_id){
	return new Promise((resolve,reject) =>{
		flickr.get("places.getInfo",{"place_id":place_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.place);
			}
		});
	});
}

function getProfile(user_id){
	return new Promise((resolve,reject) =>{
		flickr.get("profile.getProfile",{"user_id":user_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.profile);
			}
		});
	});
}

function getGroups(user_id){
	return new Promise((resolve,reject) =>{
		flickr.get("people.getPublicGroups",{"user_id":user_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.groups.group);
			}
		});
	});
}

function getPersonInfo(user_id){
	return new Promise((resolve,reject) =>{
		flickr.get("people.getInfo",{"user_id":user_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.person);
			}
		});
	});
}

function getTree(user_id){
	return new Promise((resolve,reject) =>{
		flickr.get("collections.getTree",{"user_id":user_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.collections.collection);
			}
		});
	});
}

function getGroupInfo(group_id){
	return new Promise((resolve,reject) =>{
		flickr.get("groups.getInfo",{"group_id":group_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.comments.comment);
				resolve(result.group);
			}
		});
	});
}

function getGalleriesOf(photo_id,args){
	args['photo_id'] = photo_id;
	return new Promise((resolve,reject) =>{
		flickr.get("galleries.getListForPhoto",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.galleries);
				resolve(result.galleries.gallery);
			}
		});
	});
}

function getGalleries(user_id,args){
	args['user_id'] = user_id;
	return new Promise((resolve,reject) =>{
		flickr.get("galleries.getList",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.galleries);
				resolve(result.galleries.gallery);
			}
		});
	});
}

function getPhotosInGallery(gallery_id,args){
	args['gallery_id'] = gallery_id;
	return new Promise((resolve,reject) =>{
		flickr.get("galleries.getPhotos",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.galleries);
				resolve(result.galleries.gallery);
			}
		});
	});
}

function getTopics(group_id){
	return new Promise((resolve,reject) =>{
		flickr.get("groups.discuss.topics.getList",{"group_id":group_id},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.galleries);
				resolve(result.topics.topic);
			}
		});
	});
}

function interestingPhotos(args){
	return new Promise((resolve,reject) =>{
		flickr.get("interestingness.getList",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.galleries);
				resolve(result.photos.photo);
			}
		});
	});
}

function getPandas(){
	return new Promise((resolve,reject) =>{
		flickr.get("panda.getList",{},function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				//console.log(result.galleries);
				resolve(result.pandas.panda);
			}
		});
	});
}

function getPandaPhotos(panda_name,args){
	args['panda_name'] = panda_name;
	return new Promise((resolve,reject) =>{
		flickr.get("panda.getPhotos",args,function(err,result){
			if (err) {
				console.error(err);
				reject(err);
			}else{
				console.log(JSON.stringify(result));
				resolve(result.photos.photo);
			}
		});
	});
}

module.exports = {
					searchPhotos,
					searchGroups,
					recentPhotos,
					getContexts,
					getContactsPhoto,
					getExif,
					getFavoritePeople,
					getFavoritePhotos,
					getInfo,
					getPopular,
					getSizes,
					getComments,
					getLocations,
					getPeople,
					getPhotos,
					getPhotosOf,
					getPhotoset,
					getPhotosetComments,
					searchPlaces,
					getPlaceInfo,
					getTopPlaces,
					searchPlacesBoundingBox,
					getProfile,
					searchUser,
					getGroups,
					getPersonInfo,
					getTree,
					getContacts,
					getGroupInfo,
					getGalleriesOf,
					getGalleries,
					getPhotosInGallery,
					getTopics,
					interestingPhotos,
					getPandas,
					getPandaPhotos
				};