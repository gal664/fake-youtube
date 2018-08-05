import React, { Component } from 'react';
import './Navbar.css';
import Search from './search/Search'
import logo from './logo.png';
import profilePic from './profilePic.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <sidebar/> */}
        <img class="logo" src={logo} alt="logo"/>
        <Search/>
        <div class="navbar_right">
        {/* <buttonsMenu/> */}
        <img class="profilePic" src={profilePic} alt="profile"/>
        </div>
      </div>
    );
  }
}

export default Navbar;
