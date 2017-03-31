require('dotenv').config();

var config = {};
  config.twitter = {};
  config.twitter.consumer_key    =  process.env.TWITTER_CONSUMER_KEY    || 'key';
  config.twitter.consumer_secret =  process.env.TWITTER_CONSUMER_SECRET || 'password';
  config.twitter.access_token_key = process.env.TWITTER_ACCESS_TOKEN_KEY;
  config.twitter.access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
  
  config.fb = {};
  config.fb.app_id = process.env.FACEBOOK_APP_ID;
  config.fb.app_secret = process.env.FACEBOOK_APP_SECRET;
  config.fb.access_token = process.env.FACEBOOK_ACCESS_TOKEN;
  
 module.exports = config;