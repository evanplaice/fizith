import dotenv from 'dotenv';
import twitter from 'twitter';

const env = dotenv.config();
const client = new twitter({
  consumer_key: env.consumer_key,
  consumer_secret: env.consumer_secret,
  access_token_key: env.access_token_key,
  access_token_secret: env.access_token_secret
});

export function Search() {
  return;
};

export function Run() {
  return;
}

function deleteTweet() {
  return;
}

function filterTweets() {
  return;
}
