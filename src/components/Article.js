import React from "react"

function Article( { title, date = "January 1, 1970", preview, time} ){
    function emojiCount(time){
        let emoji
        let count
        if (time < 30){
            emoji = '☕️'
            count = Math.ceil(time/5)
        }
        else {
            emoji = '🍱'
            count = Math.ceil(time/10)
        }
        return emoji.repeat(count)
    }

    return(
        <React.Fragment>
            <h3>{title}</h3>
            <small>{date} - {emojiCount(time)} {time} min to read</small>
            <p>{preview}</p>
        </React.Fragment>
    );
}

export default Article;