import React, { Component } from "react";
import "./AddVideoPage.css";
import { withRouter } from "react-router-dom";

class AddVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.videoIdInput = React.createRef();
    this.channelThumbnailInput = React.createRef();
  }

  handleSubmit() {
    fetch(`/api/video/scrape/${this.videoIdInput.current.value}`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({channelThumbnailUrl: this.channelThumbnailInput.current.value})
      });
  }

  render() {
    return (
      <div className="addVideoPage">
        <h1 className="title">Add a video from Youtube</h1>
        <span className="notice">
          This project uses npm packages in order to get video information from youtube.<br />
          in order to add a new video, please insert the video's id in the input below.
        </span>
        <span className="comment">
          youtube's video id is located at the end of a video link, for instance:<br />
          https://www.youtube.com/watch?v=<span className="bold">ToCB4ZnYYJs</span>
        </span>
        <input id="youtube_id" ref={this.videoIdInput} name="youtube_id" type="text" placeholder="youtube id" required />
        <span className="notice">
          Since I'm using a node module to scrape the data from Youtube, I'm missing some data.<br />
          the only thing I'm missing is the video's channel image (yes, it needs to be perfect..)<br />
          please copy the image-link for the video's channel's thumbnail and paste it below.
        </span>
        <input id="channel_thumbnail" ref={this.channelThumbnailInput} name="channel_thumbnail" type="text" placeholder="channel thumbnail" required />
        <button onClick={this.handleSubmit}>create video</button>
      </div>
    );
  }
}

export default withRouter(AddVideoPage);