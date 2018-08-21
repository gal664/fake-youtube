import React, { Component } from 'react';
import './Sidebar.css'
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import logo from "./logo.png";

class Sidebar extends Component {
  render() {
    return (
      <div className="SidebarContainer">
        <div className="sidebar_top">
          <i className="sidebar_toggle fas fa-bars"></i>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <SidebarMenu/>
      </div>
    );
  }
}

export default Sidebar;
