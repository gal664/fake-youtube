import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";

class List extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="listContainer">
          <div className="listTitle">List title</div>
          <div className="list">
          <ListItem/>
          </div>
          <div className="listDivider"></div>
        </div>
      </div>
    );
  }
}

export default List;
