import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <div className="listItemContainer">
        <div className="pictureContainer">
          <div className="playButton"></div>
          <div className="picture"></div>
          <div className="videoLength">04:20</div>
        </div>
        <div className="title">Video title that is also breaking a line</div>
        <div className="metadata">
          <span className="author">Author Name</span>
          <br></br>
          <div className="dateAndViewsContainer">
            <span className="viewsCounter">100</span>
            <span> views • </span>
            <span className="releaseDate">20 minutes</span>
            <span> ago</span>
          </div>
          <span className="releaseDate"></span>
        </div>
      </div>
    );
  }
}

export default ListItem;
