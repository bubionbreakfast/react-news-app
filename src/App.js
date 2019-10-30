import React, { Component } from 'react';
import './App.css';
import StoryContainer from './containers/StoryContainer';

class App extends Component() {
  render(){
  return (
    <div className="App">
      <StoryContainer />
    </div>
  );
  }
}

export default App;
