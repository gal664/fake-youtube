import React, { Component } from 'react';
import './ButtonsMenu.css'
import profilePic from './profilePic.png';

class ButtonsMenu extends Component {
  render() {
    return (
      <div className="ButtonsMenuContainer">
          <img className="profilePic" src={profilePic} alt="profile" />
      </div>
    );
  }
}

export default ButtonsMenu;
