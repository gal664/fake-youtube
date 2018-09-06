import React, { Component } from 'react';
import './MenuItem.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
      title: this.props.title,
    }
  }

  setIcon() {
    switch (this.props.type) {
      case "channel":
        return (<img className="channelIcon" src={this.props.icon} alt={this.state.title}></img>)
      case "appPage":
        return (<i className={this.props.icon}></i>)
      default:
        return (<img className="channelIcon" src={this.props.icon} alt={this.state.title}></img>)
    }
  }

  render() {
    return (
      <li
        className={`item ${this.state.current}`}
      >
        {this.setIcon()}
        <span className="title">{this.state.title}</span>
      </li>
    );
  }
}

export default Sidebar;
