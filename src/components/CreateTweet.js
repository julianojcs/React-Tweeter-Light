import React from 'react'
import { v4 as uuidv4 } from "uuid"

const CreateTweet = (props) => {
    const userInputHandler = (e) => {
        props.setTextInput(e.target.value)
    }
    const submitTweetHandler = (e) => {
        e.preventDefault()
        if (props.textInput.trim()!=="") {
            props.setTweets([...props.tweets, { id: uuidv4(), message: props.textInput, likes: 0 }])
            props.setTextInput("")
        } else {
            alert("Fill the message box first.")
        }
    }

    return (
        <form className="tweetForm" onSubmit={submitTweetHandler}>
            <textarea
                value={props.textInput}
                onChange={userInputHandler}
                cols="50"
                rows="5"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateTweet