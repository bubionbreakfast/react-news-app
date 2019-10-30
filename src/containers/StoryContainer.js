import React from 'react';
import StorySelector from '../components/StorySelector';
import StoryDetail from '../components/StoryDetail';

class StoryContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: [],
            currentStory: null,
            stories: []
        };
        this.handleStorySelected = this.handleStorySelected.bind(this);
    } 

    componentDidMount(){
        const url1 = 'https://hacker-news.firebaseio.com/v0/topstories.json';
       

        fetch(url1)
        .then(res => res.json())
        .then(id => {
            // Promise.all()
            this.setState({ id: id })
        })
        .catch(err => console.error);
    }

    handleStorySelected(index){
        const selectedStory = this.state.id[index];
        // this.setState({currentStory: selectedStory})
        const url2 = `https://hacker-news.firebaseio.com/v0/item/${selectedStory}.json`;

        fetch(url2)
        .then(res => res.json())
        .then(story => {
            this.setState({currentStory: story})
        })
        .catch(err => console.error);
    }

    render(){
        return(
            <div>
            <h2>Im a Story Container</h2>
            <StorySelector  id = {this.state.id} onStorySelected = {this.handleStorySelected}/>
            <StoryDetail story = {this.state.currentStory}/>
            </div>
        )
    }
}



export default StoryContainer;