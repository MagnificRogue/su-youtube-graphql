var config = require('../config');
var Promise = require('promise');
const snoowrap = require('snoowrap');

const r = new snoowrap({
	userAgent: 	config.reddit.userAgent,
	clientId:  	config.reddit.client_id,
	clientSecret:	config.reddit.client_secret,
	username:		config.reddit.username,
	password:		config.reddit.password
});

function redditAPI(resolveName, id, args){
	return new Promise((resolve,reject) =>{
		switch(resolveName){
			case 'searchSubreddits':
				r.searchSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'searchSubredditNames':
				r.searchSubredditNames(args).then((data) =>{
					//console.log(data);
					resolve(data);
				});
				break;
				
			case 'searchSubredditTopics':
				r.searchSubredditTopics(args).then((data) =>{
					//console.log(data);
					resolve(data);
				});
				break;
				
			case 'getPopularSubreddits':
				r.getPopularSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'getNewSubreddits':
				r.getNewSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'getGoldSubreddits':
				r.getGoldSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'getDefaultSubreddits':
				r.getDefaultSubreddits(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'search':
				r.search(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'getHot':
				r.getHot(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'getNew':
				r.getNew(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'getTop':
				r.getTop(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'getControversial':
				r.getControversial(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'getRising':
				r.getRising(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'getNewComments':
				r.getNewComments(args).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'trophy':
				r.getUser(id).getTrophies().then((data) => {
					//console.log(data.trophies);
					resolve(data.trophies);
				});
				break;
			
			case 'overview':
				r.getUser(id).getOverview().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'submission':
				r.getUser(id).getSubmissions().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'comment':
				r.getUser(id).getComments().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'upvote':
				r.getUser(id).getUpvotedContent().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'downvote':
				r.getUser(id).getDownvotedContent().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			/*case 'expansion':
				r.getSubmission(id).expandReplies({options:{args}}).then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						console.log(data);
						resolve(data);
					})
				});
				break;
			
			case 'getUserFlairTemplates':
				r.getSubreddit(id).getUserFlairTemplates().then((data) => {
						//console.log(data);
						resolve(data);
				});
				break;
				
			case 'subreddit_hot':
				r.getSubreddit(id).getHot().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;
				
			case 'subreddit_new':
				r.getSubreddit(id).getNew().then((listing) =>  {
					listing.fetchMore({amount:args['extra']}).then((data) => {
						//console.log(data);
						resolve(data);
					})
				});
				break;*/
				
				
			default:
				console.log('sorry we can\'t find matching resolve type:' + resolveName);
				resolve(null);
		}
	});
}

module.exports = redditAPI;