import React, { Component } from 'react';
import './MenuItem.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="current">
        <li className="item">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </li>
      </div>
    );
  }
}

export default Sidebar;
