import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9090/api/lists")
      .then(response => response.json())
      .then(data => this.setState({ lists: data }));
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="contentContainer">
          <Homepage
            lists={this.state.lists}
          />
        </div>
      </div>
    );
  }
}

export default App;
