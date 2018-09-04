import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    };
  }

  componentDidMount() {
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
        <div className="contentContainer">
          <Homepage
            lists={this.state.channels}
          />
        </div>
      </div>
    );
  }
}

export default App;
