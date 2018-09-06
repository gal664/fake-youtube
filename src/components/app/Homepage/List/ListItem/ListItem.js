import React, { Component } from "react";
import "./ListItem.css";
import timediff from "timediff";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  calculateViewsCounter(views){
    if(views > 1000000000) return `${Math.round( views/1000000000 * 10) / 10}B`;
    if(views > 1000000) return `${Math.round( views/1000000 * 10) / 10}M`;
    if(views < 1000000 && views > 10000) return `${Math.round( views/100000 * 100)}K`;
    if(views < 1000) return views;
  }
  
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
            <span className="viewsCounter">{this.calculateViewsCounter(this.props.views)}</span>
            <span> views • </span>
            <span className="releaseDate">{this.calculateTimeUploaded(this.props.timeUploaded)}</span >
            <span> ago</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
