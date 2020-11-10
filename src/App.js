import React, { useState } from "react"
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"
import "./styles/Tweet.scss"

function App() {
    const [name, setName] = useState("Juliano Costa")
    const [textInput, setTextInput] = useState("")
    const [tweets, setTweets] = useState([])
    
    return (
        <div className="container">
            <h1 className="title">TWITTER LIGHT</h1>
            <CreateTweet
                textInput={textInput}
                setTextInput={setTextInput}
                tweets={tweets}
                setTweets={setTweets}
            />
            <TweetList name={name} tweets={tweets} setTweets={setTweets} />
        </div>
    );
}

export default App;
