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
        key={list.id}
        title={list.title}
      />);
  }
}

export default Homepage;