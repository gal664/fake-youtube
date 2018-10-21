import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import VideoPage from './VideoPage/VideoPage';
import AddVideoPage from './AddVideoPage/AddVideoPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  updateWindowDimensions() {
    this.setState({ windowDimensions: { width: window.innerWidth, height: window.innerHeight } });
  }
  
  componentWillMount(){
    this.updateWindowDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="app">
        <Navbar/>
        <div className="contentContainer menuIsOpen">
            <Switch>
              <Route exact path='/'
                component ={() => <Homepage windowDimensions={this.state.windowDimensions}
                />}
              />
              <Route path='/video/:id'
                component ={() => <VideoPage
                  video={this.state.video}
                  windowDimensions={this.state.windowDimensions}
                />}
              />
              <Route path='/add'
                component ={() => <AddVideoPage
                  windowDimensions={this.state.windowDimensions}
                />}
              />
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
