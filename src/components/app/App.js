import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <div className="contentContainer">
          <Homepage/>
        </div>
      </div>
    );
  }
}

export default App;
