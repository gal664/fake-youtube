import React, { Component } from "react";
import "./VideoPage.css";
import Video from "./Video/Video";
import VideoData from "./VideoData/VideoData";
import UpNext from "./UpNext/UpNext";
import { withRouter } from "react-router-dom";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getVideo();
  }
  
  getVideo() {
    fetch(`/api/video/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ video: data }));
  }

  renderVideo() {
    return (
      <Video
        id={this.state.video._id || ""}
        title={this.state.video.title || ""}
        videoSrc={this.state.video.videoSrc || ""}
        views={this.state.video.views || ""}
        likes={this.state.video.likeCount || ""}
        dislikes={this.state.video.disLikeCount || ""}
      />);
  }

  renderVideoData() {
    return (
      <VideoData
      id={this.state.video._id || ""}
      channel={this.state.video.channel || ""}
      timeUploaded={this.state.video.time_uploaded || ""}
      />
      );
  }

  renderUpNext(){
    return <UpNext/>
  }

  render() {
    if(!this.state.video) return <div>loading...</div>    
    return (
      <div className="videoPage">
        <div className="videoComponentContainer">
          {this.renderVideo()}
          {this.renderVideoData()}
        </div>
        {this.renderUpNext()}
      </div>
    );
  }
}

export default withRouter(VideoPage);