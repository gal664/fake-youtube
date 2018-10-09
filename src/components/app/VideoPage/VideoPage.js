import React, { Component } from "react";
import "./VideoPage.css";
import Video from "./Video/Video";
import VideoData from "./VideoData/VideoData";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {}
    }
    this.getVideo();    
  }
  getVideo() {
    fetch(`/api/video?_id=${this.props.video}`)
      .then(response => response.json())
      .then(data => this.setState({ video: data }));
  }

  getChannel() {
    fetch("/api/channel")
      .then(response => response.json())
      .then(data => this.setState({ channel: data }));
  }

  renderVideo() {
    return (
      <Video
        id="5b90161e422f3c5668259caa" // id={this.props.video._id}
        title="Avenged Sevenfold - Afterlife [Music Video]" // title={this.props.video.title}
        videoSrc="https://www.youtube.com/watch?v=oJaBHSIRVlE" // videoSrc={this.props.video.videoSrc}
        views={13039955} // views={this.props.video.views}
        likes={100}
        dislikes={9}
      />);
  }
  renderVideoData() {
    // fetch("/api/channel/?channelId=5b90109c32616728e4a1c03b")
    // .then(response => response.json())
    // .then(data => this.setState({ channels: data })); // will return channel data
    return (
      <VideoData
        id="5b90161e422f3c5668259caa" // id={this.props.video._id}
        video={{
          channel: {
            _id: "5b90109c32616728e4a1c03b", // id={this.props.video.channel._id}
            title: "Avenged Sevenfold", // id={this.props.video.channel.title}
            icon: "https://yt3.ggpht.com/a-/AN66SAwYbvd2YElRsE58puzTZ5Yvp-QpYEZ9N8qrIw=s88-mo-c-c0xffffffff-rj-k-no" // id={this.props.video.channel.icon}
          }
        }}
        timeUploaded="2010-04-29T00:00:00.000Z" // timeUploaded={this.props.video.time_uploaded}
      />);
  }

  render() {
    return (
      <div className="VideoPage">
        {this.renderVideo()}
        {this.renderVideoData()}
      </div>
    );
  }
}

export default VideoPage;