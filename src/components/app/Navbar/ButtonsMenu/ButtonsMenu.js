import React, { Component } from 'react';
import './ButtonsMenu.css'
import { NavLink } from 'react-router-dom'

class ButtonsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true
    };

    this.handleAddVideoButtonClick = this.handleAddVideoButtonClick.bind(this);
  }

  handleAddVideoButtonClick() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
        return <NavLink to={`/add`} className="addVideosButton" onClick={this.handleAddVideoButtonClick}>Add Video</NavLink>
  }
}

export default ButtonsMenu;
