import React, { Component } from "react";
import "./VideoPage.css";
import Video from "./Video/Video";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {}
    }
  }
  getVideo() {
    fetch("http://localhost:9090/api/channel")
      .then(response => response.json())
      .then(data => this.setState({ video: data }));
  }

  renderVideo() {
    return (
      <Video
        key="5b90161e422f3c5668259caa" // key={this.props.video._id}
        id="5b90161e422f3c5668259caa" // id={this.props.video._id}
        channel="5b90109c32616728e4a1c03b" // channel={this.props.video.channel}
        title="Avenged Sevenfold - Afterlife [Music Video]" // title={this.props.video.title}
        thumbnail="https://i.ytimg.com/vi/oJaBHSIRVlE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAPWxbK_M78AZR8X_17TzPewiVhJg" // thumbnail={this.props.video.thumbnail}
        videoSrc="https://www.youtube.com/watch?v=oJaBHSIRVlE" // videoSrc={this.props.video.videoSrc}
        length="4:03" // length={this.props.video.length}
        views={13039955} // views={this.props.video.views}
        timeUploaded="2010-04-29T00:00:00.000Z" // timeUploaded={this.props.video.time_uploaded}
      />);
  }

  render() {
    return (
      <div className="VideoPage">
        {this.renderVideo()}
      </div>
    );
  }
}

export default VideoPage;