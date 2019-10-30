import React from 'react'

const StoryDetail = (props) => {
    if(!props.story) return null;
    return (
        <div>
            <h3>Title: {props.story.title}</h3>
            <p>By: {props.story.by}</p>
            <p>Text: {props.story.text}</p>
            <p>Read more>>: <a href={props.story.url}>{props.story.title}</a></p>
        </div>
    )
}



export default StoryDetail;