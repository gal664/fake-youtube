import React, { Component } from "react";
import './UpNext.css';
import UpnextListItem from "./UpnextListItem/UpnextListItem";

class UpNext extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getVideosAndShuffle()
  };

  getVideosAndShuffle() {
    fetch("/api/video")
      .then(response => response.json())
      .then(data => this.shuffleVideos(data))
      .then(data => this.setState({ videos: data }));
  }

  shuffleVideos(videos) {
    var m = videos.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = videos[m];
      videos[m] = videos[i];
      videos[i] = t;
    }
    return videos;
  }

  renderListItems() {
    return this.state.videos.map(video =>
      <UpnextListItem
        id={video._id}
        length={video.length || ""}
        title={video.title || ""}
        thumbnail={video.thumbnail || ""}
        author={video.channel.title || ""}
        views={video.views || ""}
        key={video._id}
      />);
  }

  render() {
    if (!this.state.videos) return <div>Loading...</div>
    return (
      <div className="upNextContainer">
      <span className="title">Up Next</span>
        {this.renderListItems()}
      </div>
    );
  }
}

export default UpNext;