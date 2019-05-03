A CLI for curating your Twitter history based to trim the fat and leave the good. Select Tweets between a date range and deletes any that fall below the minimum threshold of likes/retweets.

## Commands

### Search

Prints a list of tweets that fall below the minimum threshold

```sh
fizith s|search [user] [options]
```

### Run

Queues up a list of tweets that fall below the minimum threshold and deletes them at a rate of one tweet every 2 minutes<sup>1</sup> 

```sh
fixith r|run [user] [options]
```

*<sup>1</sup>This slow rate was intentionally chosen to fall well within Twitter's rate limit on requests*

## Options

### Start (range)

How many months back should the search start?

```sh
-s | --start: How far back (months) should the search start
```

### End (range)

How many months back should the search end?

```sh
-e | --end: How far back (months) should the search end
```

### Likes (threshold)

Delete all tweets that have fewer than this many likes

```sh
-l | --likes: Likes threshold, delete all tweets fewer than
```

### Retweets (threshold)

Delete all tweets that have fewer than this many retweets

```sh
-r | --retweets: Retweets threshold, delete all tweets fewer than
```

*Note: The thresholds are NOT mutually exclusive. If a tweet matches one OR the other it won't be deleted.*

## Example

The following will:

- query for tweets/replies posted by @evanplaice from 6-to-12 months ago
- tweets/replies with less than 5 likes or 1 retweet will be deleted

```sh
fizith r @evanplaice -s 6 -e 12 -l 5 -r 1
```
