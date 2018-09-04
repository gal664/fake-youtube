import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  calculateTimeUploaded(time) {
    let parsedTime = Date.parse(time);
    let curTime = Date.parse(new Date());
    let diff = curTime - parsedTime;
    return `${diff} miliseconds ago`;
  }

  render() {
    return (
      <div className="listItemContainer">
        <div className="pictureContainer">
          <div className="playButton">
            <i className="fas fa-play"></i>
          </div>
          <div className="videoLength">{this.props.length}</div>
          <img className="picture" src={this.props.thumbnail} alt={this.props.title}></img>
        </div>
        <div className="title">{this.props.title}</div>
        <div className="metadata">
          <span className="author">{this.props.author}</span>
          <br></br>
          <div className="dateAndViewsContainer">
            <span className="viewsCounter">{this.props.views}</span>
            <span> views • </span>
            <span className="releaseDate">{this.calculateTimeUploaded(this.props.timeUploaded)}</span >
            <span> ago</span>
          </div>
          <span className="releaseDate"></span>
        </div>
      </div>
    );
  }
}

export default ListItem;
