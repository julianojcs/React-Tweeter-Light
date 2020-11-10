import React from "react"
import "../styles/Tweet.scss"

const Tweet = (props) => {
    const deleteTweet = () => {
        props.setTweets(props.tweets.filter((state) => (state.id !== props.tweet.id) ))
    }

    return (
        <div className="tweet">
            <h2 className="tweet-title">{props.name}</h2>
            <h3>{props.tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet