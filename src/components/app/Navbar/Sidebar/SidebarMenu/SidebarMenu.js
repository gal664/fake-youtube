import React, { Component } from 'react';
import './SidebarMenu.css'
import MenuItem from './MenuItem/MenuItem';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar_menu">
          <ul className="menu">
              <MenuItem title="Home"/>
              <MenuItem title="Subscriptions"/>
              <MenuItem title="History"/>
              <li className="title">
                <span>Channels</span>
              </li>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
              <MenuItem title="channel name"/>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
