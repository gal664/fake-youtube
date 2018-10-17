import React, { Component } from "react";
import './UpnextListItem.css';
import { NavLink } from 'react-router-dom'

class UpnextListItem extends Component {
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

  render() {
    return (
      <div className="UpnextListItemContainer">
        <NavLink to={`${this.props.id}`} className="pictureContainer">
          <span className="videoLength">{this.props.length}</span>
          <img className="picture" src={this.props.thumbnail} alt={this.props.title}></img> 
        </NavLink>
        <div className="videoInfoContainer">
            <div className="title">{this.props.title}</div>
          <div className="metadata">
            <span className="author">{this.props.author}</span>
            <div className="viewsContainer">
              <span className="viewsCounter">{this.calculateViewsCounter(this.props.views)}</span>
              <span> views</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpnextListItem;
