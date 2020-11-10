import React from "react"

const Tweet = (props) => {
    const deleteTweet = () => {
        props.setTweets(props.tweets.filter((state) => (state.id !== props.tweet.id) ))
    }
    const likeTweet = () => {
        
        props.setTweets(
            props.tweets.map((state) => {
                if (state.id === props.tweet.id) {
                    return {
                        id: props.tweet.id,
                        message: props.tweet.message,
                        likes: props.tweet.likes+1
                    }
                }
                return state
            })
        )
    }

    return (
        <div className="tweet">
            <h2 className="tweet-title">{props.name}</h2>
            <h3>{props.tweet.message}</h3>
            <div className="likes">
                <button onClick={deleteTweet}>Delete</button>
                <button onClick={likeTweet}>Like</button>
                <i className="fa fa-thumbs-up">{props.tweet.likes}</i>
            </div>
        </div>
    )
}

export default Tweet