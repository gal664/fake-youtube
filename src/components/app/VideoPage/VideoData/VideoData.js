import React, { Component } from "react";
import './VideoData.css';

class VideoData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  parseTimeUploaded(){
    let timeUploaded = new Date(this.props.timeUploaded);
    let day = timeUploaded.getDate(this.props.timeUploaded);
    let month = timeUploaded.toLocaleDateString("en-us", {month:"long"}).slice(0,3);
    let year = timeUploaded.getFullYear(this.props.timeUploaded);
    return `Published on ${month} ${day}, ${year}`;
  }

  render() {
    return (
      <div className="videoDataContainer">
        <img className="channelIcon" src={this.props.channel.icon} alt="channel Thumbnail"></img>
        <div className="videoInfo">
          <div className="channelText">
            <span className="channelTitle">{this.props.channel.title}</span>
            <span className="publishDate">{this.parseTimeUploaded()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoData;
