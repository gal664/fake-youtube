import React, { Component } from 'react';
import './SidebarMenu.css'
import MenuItem from './MenuItem/MenuItem';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderChannelsMenu(){
      return this.props.channels
        .map(channel => <MenuItem
          key={channel._id}
          title={channel.title}
          type="channel"
          icon={channel.icon}
          onClick={this.setCurrentItem}
        />);
  }

  render() {
    return (
      <div className="sidebar_menu">
        <ul className="menu">
          <li className="title">
            <span>Channels</span>
          </li>
          {this.renderChannelsMenu()}
        </ul>
      </div>
    );
  }
}

export default Sidebar;