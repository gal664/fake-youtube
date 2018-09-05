import React, { Component } from "react";
import "./Homepage.css";
import List from "./List/List";

class Homepage extends Component {

  renderLists() {
    return this.props.lists
      .map(list => <List
        key={list._id}
        id={list._id}
        title={list.title}
      />);
  }

  render() {
    return (
      <div className="homepage">
        {this.renderLists()}
      </div>
    );
  }
}

export default Homepage;