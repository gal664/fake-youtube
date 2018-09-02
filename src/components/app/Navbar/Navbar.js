import React, { Component } from "react";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import ButtonsMenu from "./ButtonsMenu/ButtonsMenu";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar_left">
        <Sidebar channels={this.props.channels}/>
        </div>
        <Search />
        <div className="navbar_right">
        <ButtonsMenu />
        </div>
      </div>
    );
  }
}

export default Navbar;
