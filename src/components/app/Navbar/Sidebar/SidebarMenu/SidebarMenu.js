import React, { Component } from 'react';
import './SidebarMenu.css'
import MenuItem from './MenuItem/MenuItem';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  setCurrentItem() {
    alert("click");
  }

  render() {
    return (
      <div className="sidebar_menu">
        <ul className="menu">
          <MenuItem
            type="appPage"
            title="Home"
            current="current"
            onClick={this.setCurrentItem}
          />
          <MenuItem
            type="appPage"
            title="Subscriptions"
            onClick={this.setCurrentItem}
          />
          <MenuItem
            type="appPage"
            title="History"
            onClick={this.setCurrentItem}
          />
          <li className="title">
            <span>Channels</span>
          </li>
          <MenuItem
            type="channel"
            title="Channel Name"
            onClick={this.setCurrentItem} />
        </ul>
      </div>
    );
  }
}

export default Sidebar;
