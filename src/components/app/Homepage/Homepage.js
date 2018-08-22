import React, { Component } from "react";
import "./Homepage.css";
import List from "./List/List";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
      </div>
    );
  }
}

export default Homepage;
