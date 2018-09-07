import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftSide: true,
      size: this.props.size,
    };
    this.slideListBtnClickHandler = this.slideListBtnClickHandler.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:9090/api/video?channel=${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ videos: data }));
  }

  renderVideos() {
    if (!this.state.videos) return '';
    return this.state.videos.slice(0, this.state.size)
      .map(video => <ListItem
        key={video._id}
        id={video._id}
        length={video.length}
        thumbnail={video.thumbnail}
        timeUploaded={video.time_uploaded}
        views={video.views}
        title={video.title}
        author={video.channel.title}
      />);
  }

  slideListBtnClickHandler() {
    this.setState({ isLeftSide: !this.state.isLeftSide })
  }

  setSlideListBtnArrowSide() {
    if (this.state.isLeftSide) {
      return (
        <div className="slideListBtn right" onClick={this.slideListBtnClickHandler}>
          <i className="fas fa-chevron-right"></i>
        </div>
      )
    } else {
      return (
        <div className="slideListBtn left" onClick={this.slideListBtnClickHandler}>
          <i className="fas fa-chevron-left"></i>
        </div>
      )
    }
  }

  slideList(){
    if (this.state.isLeftSide) return "videosContainer right";
    if (!this.state.isLeftSide) return "videosContainer left";
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="listContainer">
          <div className="listTitle">{this.props.title}</div>
          <div className="list">
            <div className="listSlider">
              <div className={this.slideList()}>
                {this.renderVideos()}
              </div>
            </div>
              {this.setSlideListBtnArrowSide()}
          </div>
          <div className="listDivider"></div>
        </div>
      </div>
    );
  }
}

export default List;