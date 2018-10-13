import React, { Component } from "react";
import './Video.css';
import timediff from "timediff";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  
  calculateTimeUploaded(time) {
    let parsedTime = Date.parse(time);
    let curTime = Date.parse(new Date());
    let diff = timediff(parsedTime, curTime, "YMWDHmS");
    if (diff.years === 1) return `${diff.years} year`;
    if (diff.years) return `${diff.years} years`;
    if (diff.months === 1) return `${diff.months} month`;
    if (diff.months) return `${diff.months} months`;
    if (diff.weeks === 1) return `${diff.weeks} week`;
    if (diff.weeks) return `${diff.weeks} weeks`;
    if (diff.days === 1) return `${diff.days} day`;
    if (diff.days) return `${diff.days} days`;
    if (diff.hours === 1) return `${diff.hours} hour`;
    if (diff.hours) return `${diff.hours} hours`;
    if (diff.minutes === 1) return `${diff.minutes} minute`;
    if (diff.minutes) return `${diff.minutes} minutes`;
    if (diff.seconds === 1) return `${diff.seconds} second`;
    if (diff.seconds) return `${diff.seconds} seconds`;
  }

  splitSrcString() {
    let splitSrcString = this.props.videoSrc.split("/watch?v=");
    return `${splitSrcString[0]}/embed/${splitSrcString[1]}?rel=0`
  }

  embedVideo() {
    return (
      <iframe
        title={this.props.title}
        width="711"
        height="373"
        src={this.splitSrcString()}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen>
      </iframe>
    );
  }

  render() {
    return (
      <div className="videoContainer">
        {this.embedVideo()}
        <div className="title">{this.props.title}</div>
        <div className="infoBar">
          <div className="views">
            <span>{this.props.views.toLocaleString()} views</span>
          </div>
          <div className="likesAndDislikesContainer">
            <div className="like">
              <i className="fas fa-thumbs-up"></i>
              <span>{this.props.likes}</span>
            </div>
            <div className="dislike">
              <i className="fas fa-thumbs-down"></i>
              <span>{this.props.dislikes}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
