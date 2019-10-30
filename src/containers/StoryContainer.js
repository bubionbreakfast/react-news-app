import React from 'react';
import StorySelector from '../components/StorySelector';
import StoryDetail from '../components/StoryDetail';

class StoryContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stories: [],
            currentStory: null
        };
        this.handleStorySelected = this.handleStorySelected.bind(this);
    } 

    componentDidMount(){
        const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

        fetch(url)
        .then(res => res.json())
        .then(stories => this.setState({ stories: stories }))
        .catch(err => console.error);
    }

    handleStorySelected(index){
        const selectedStory = this.state.stories[index];
        this.setState({currentStory: selectedStory})
    }

    render(){
        return(
            <div>
            <h2>Im a Story Container</h2>
            <StorySelector  stories = {this.state.stories} onStorySelected = {this.handleStorySelected}/>
            <StoryDetail story = {this.state.currentStory}/>
            </div>
        )
    }
}



export default StoryContainer;