import React from 'react';
import StorySelector from '../components/StorySelector';
import StoryDetail from '../components/StoryDetail';

class StoryContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stories: [],
            currentStory: null
        }
    } 

    componentDidMount(){
        const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

        fetch(url)
        .then(res => res.json())
        .then(stories => this.setState({ stories: stories }))
        .catch(err => console.error);
    }

    render(){
        return(
            <div>
            <h2>Im a Story Container</h2>
            <StorySelector />
            <StoryDetail />
            </div>
        )
    }
}





export default StoryContainer;