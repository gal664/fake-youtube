import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";

class List extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    fetch(`http://localhost:9090/api/videos?channel_id=${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ videos: data }));
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="listContainer">
          <div className="listTitle">{this.props.title}</div>
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
