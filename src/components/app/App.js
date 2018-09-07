import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
// import Homepage from './Homepage/Homepage';
import VideoPage from './VideoPage/VideoPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      video: "5b90161e422f3c5668259caa",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  updateWindowDimensions() {
    this.setState({ windowDimensions:{width: window.innerWidth, height: window.innerHeight} });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    fetch("http://localhost:9090/api/channel")
      .then(response => response.json())
      .then(data => this.setState({ channels: data }));
  }

  render() {
    return (
      <div className="app">
        <Navbar
          channels={this.state.channels}
        />
        <div className="contentContainer menuIsClosed">
          {/* <Homepage
            lists={this.state.channels}
            windowDimensions={this.state.windowDimensions}
          /> */}
          <VideoPage
            video={this.state.video}
            lists={this.state.channels}
            windowDimensions={this.state.windowDimensions}
          />
        </div>
      </div>
    );
  }
}

export default App;
