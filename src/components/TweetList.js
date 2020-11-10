import React from "react"
import Tweet from "./Tweet"

const TweetList = (props) => {
    return (
        <div className="tweet-list">
            {props.tweets.map((tweet) => (
                <Tweet
                    setTweets={props.setTweets}
                    name={props.name}
                    tweet={tweet}
                    tweets={props.tweets}
                    key={tweet.id}
                />
            ))}
        </div>
    )
}

export default TweetList