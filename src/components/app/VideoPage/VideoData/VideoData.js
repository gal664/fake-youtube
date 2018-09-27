import React, { Component } from "react";
import './VideoData.css';

class VideoData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="videoDataConteiner">
        <div className="videoInfo">
          {/* <img className="channelIcon" src={this.props.channel.icon} alt="channel Thumbnail"></img> */}
          <div className="channelText">
            <span className="channelTitle"></span>
            <span className="publishDate"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoData;
