import React, { Component } from 'react';
import './MenuItem.css'

class Sidebar extends Component {
  render() {
    return (
      <div class="current">
        <li class="item">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </li>
      </div>
    );
  }
}

export default Sidebar;
