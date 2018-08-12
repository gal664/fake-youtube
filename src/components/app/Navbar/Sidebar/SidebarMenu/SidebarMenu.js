import React, { Component } from 'react';
import './SidebarMenu.css'
import MenuItem from './MenuItem/MenuItem';

class Sidebar extends Component {
  render() {
    return (
        <div class="sidebar_menu">
          <ul class="menu">
            <MenuItem/>
            <li class="title">
            <span>Channels</span>
            </li>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
