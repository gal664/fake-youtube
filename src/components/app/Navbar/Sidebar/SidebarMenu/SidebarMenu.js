import React, { Component } from 'react';
import './SidebarMenu.css'
import MenuItem from './MenuItem/MenuItem';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar_menu">
          <ul className="menu">
              <MenuItem/>
              <li className="title">
                <span>Channels</span>
              </li>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
