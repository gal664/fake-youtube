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
          <MenuItem
            type="appPage"
            title="Home"
            icon="fas fa-home"
            current="current"
            onClick={this.setCurrentItem}
          />
          <MenuItem
            type="appPage"
            title="Subscriptions"
            icon="fas fa-fire"
            onClick={this.setCurrentItem}
            />
          <MenuItem
            type="appPage"
            title="History"
            icon="fas fa-history"
            onClick={this.setCurrentItem}
          />
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
