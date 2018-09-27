import React, { Component } from "react";
import "./Homepage.css";
import List from "./List/List";

class Homepage extends Component {

  setListSize(width){
    if(width <= 1400) return 6;
    if(width >= 1400) return 8;
  }

  renderLists() {
    return this.props.lists
      .map(list => <List
        key={list._id}
        id={list._id}
        title={list.title}
        size={this.setListSize(this.props.windowDimensions.width)}
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