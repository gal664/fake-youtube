import React, { Component } from "react";
import "./Homepage.css";
import List from "./List/List";

class Homepage extends Component {

  render() {
    return (
      <div className="homepage">
        {this.renderLists()}
      </div>
    );
  }

  renderLists() {
    return this.props.lists
      .map(list => <List
        title={list.title}
        id={list.id}
      />);
  }
}

export default Homepage;