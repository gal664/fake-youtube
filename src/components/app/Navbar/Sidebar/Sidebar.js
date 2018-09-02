import React, { Component } from 'react';
import './Sidebar.css'
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import logo from "./logo.png";

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuShown: true,
    }
    this.sidebarToggleClickHandler = this.sidebarToggleClickHandler.bind(this);
  }
  
  toggleMenu(){
    let result;
    if(this.state.isMenuShown){
      result = (<SidebarMenu channels={this.props.channels}/>);
    }
    return result;
    
  }

  sidebarToggleClickHandler(){
      this.setState({ isMenuShown: !this.state.isMenuShown });
  }

  render() {
    return (
      <div className="SidebarContainer">
        <div className="sidebar_top">
          <i
          className="sidebar_toggle fas fa-bars" onClick={this.sidebarToggleClickHandler}></i>
          <img className="logo" src={logo} alt="logo"/>
        </div>
        {this.toggleMenu()}
      </div>
    );
  }
}

export default Sidebar;
