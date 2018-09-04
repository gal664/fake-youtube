import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";

class List extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    fetch(`http://localhost:9090/api/video?channel=${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ videos: data}));
  }

  renderVideos() {
    if (!this.state.videos) return '';
    return this.state.videos
      .map(video => <ListItem
        key={video._id}
        id={video._id}
        length={video.length}
        thumbnail={video.thumbnail}
        timeUploaded={video.time_uploaded}
        views={video.views}
        title={video.title}
        author={video.channel.title}
      />);
  }
  
  render() {
    return (
      <div className="mainContainer">
        <div className="listContainer">
          <div className="listTitle">{this.props.title}</div>
          <div className="list">
          {this.renderVideos()}
          </div>
          <div className="listDivider"></div>
        </div>
      </div>
    );
  }
}

export default List;
