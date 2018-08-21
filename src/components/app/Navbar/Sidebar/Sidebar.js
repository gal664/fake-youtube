import React, { Component } from 'react';
import './Sidebar.css'
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import logo from "./logo.png";

class Sidebar extends Component {
  render() {
    return (
      <div class="SidebarContainer">
        <div class="sidebar_top">
          <i class="sidebar_toggle fas fa-bars"></i>
          <img class="logo" src={logo} alt="logo" />
        </div>
        <SidebarMenu/>
      </div>
    );
  }
}

export default Sidebar;
