import React, { Component } from 'react';
import './MenuItem.css'

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: this.props.current,
      title: this.props.title,
    }
  }

  render() {
    return (
        <li
        className={`item ${this.state.current}`}
        >
          <i className={this.props.icon}></i>
          <span>{this.state.title}</span>
        </li>
    );
  }
}

export default Sidebar;
