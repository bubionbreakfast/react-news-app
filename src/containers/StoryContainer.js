import React from 'react';
import StorySelector from '../components/StorySelector';
import StoryDetail from '../components/StoryDetail';

class StoryContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ids: [],
            currentStory: null,
            stories: []
        };
        this.handleStorySelected = this.handleStorySelected.bind(this);
    } 

    componentDidMount(){
        const url1 = 'https://hacker-news.firebaseio.com/v0/topstories.json';

        fetch(url1)
        .then(res => res.json())
        .then(ids => {
            const promises = ids.slice(0, 25).map(id => {
                return this.fetchStory(id)
            })
            console.log('promises', promises)
            Promise.all(promises)
                .then(stories => {
                    console.log('stories', stories)
                    this.setState({
                        stories: stories
                    })
                })
        })
        .catch(err => console.error);
    }

    async fetchStory(id) {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
    }

    handleStorySelected(index){
        const selectedStory = this.state.stories[index];
        this.setState({currentStory: selectedStory})
        // // this.setState({currentStory: selectedStory})
        // const url2 = `https://hacker-news.firebaseio.com/v0/item/${selectedStoryId}.json`;

        // fetch(url2)
        // .then(res => res.json())
        // .then(story => {
        //     this.setState({currentStory: story})
        // })
        // .catch(err => console.error);
    }

    render(){
        return(
            <div>
            <h2>Big Fat HackerNews!</h2>
            <StorySelector stories={this.state.stories} onStorySelected = {this.handleStorySelected}/>
            <StoryDetail story = {this.state.currentStory}/>
            </div>
        )
    }
}



export default StoryContainer;