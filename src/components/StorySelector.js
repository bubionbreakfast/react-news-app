import React from 'react';

const StorySelector = (props) => {
    const options = props.stories.map((story, index) => {
        return <option value={index} key={index}>{story.title}</option>
    })

    function handleChange(event){
        props.onStorySelected(event.target.value);
    }

    return(
        <select id="story-selector" onChange={handleChange} defaultValue="default">
            <option disabled value="default">
                Select a Story.....
            </option>
            {options}
        </select>
    )
}




export default StorySelector;