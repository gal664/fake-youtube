import React, { Component } from "react";
import "./Homepage.css";
import List from "./List/List";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
  }
  setListSize(width) {
    if (width <= 1400) return 6;
    if (width >= 1400) return 8;
  }

  componentWillMount() {
    fetch("/api/channel")
      .then(response => response.json())
      .then(data => this.setState({ channels: data }));
  }

  renderLists() {
    return this.state.channels
      .map(list => <List
        key={list._id}
        id={list._id}
        title={list.title}
        size={this.setListSize(this.props.windowDimensions.width)}
      />);
  }

  render() {
    if(!this.state.channels) return <div>loading...</div>    
    return (
      <div className="homepage">
        {this.renderLists()}
      </div>
    );
  }
}

export default Homepage;