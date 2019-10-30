import React from 'react'

const StoryDetail = (props) => {
    if(!props.story) return null;
    return (
        <h3>{props.story.title}</h3>
    )
}



export default StoryDetail;