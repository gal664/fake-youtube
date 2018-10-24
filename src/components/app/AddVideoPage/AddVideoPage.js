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
    let videoInfo,
      channelInfo;

    if (!this.videoIdInput.current.value || !this.channelThumbnailInput.current.value) {
      console.log("missing data in input, can't proceed")
      return
    }
    console.log(`all parameters exist, starting to scrape ${this.videoIdInput.current.value}!`)
    fetch(`/api/video/scrape/${this.videoIdInput.current.value}`,
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        channelInfo = {
          title: data.owner,
          icon: this.channelThumbnailInput.current.value,
          youtubeId: data.channelId
        };

        let parsedDuration = new Date(null);
        parsedDuration.setSeconds(data.duration);
        parsedDuration = parsedDuration.toISOString().substr(11, 8);
        // if(parsedDuration.indexOf("00:") === 0) parsedDuration.slice(3, parsedDuration.length)

        videoInfo = {
          youtubeId: data.videoId,
          title: data.title,
          description: data.description,
          thumbnail: data.thumbnailUrl,
          videoSrc: data.url,
          length: parsedDuration,
          views: data.views,
          time_uploaded: new Date(data.datePublished).toISOString(),
          likeCount: data.likeCount,
          dislikeCount: data.dislikeCount,
        }
        console.log(`scraped video, checking if channel is valid`)
        fetch(`/api/channel?id=${channelInfo.youtubeId}`,
          {
            method: 'GET',
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              'Accept': 'application/json'
            }
          })
          .then(res => res.json())
          .then(data => {
            if (data.length > 0) {
              console.log(`channel exists, linking video to ${channelInfo.title}`)
              videoInfo.channel = data[0]._id
              fetch(`/api/video`,
              {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  'Accept': 'application/json'
                },
                body: JSON.stringify(videoInfo)
              })
              .then(() => {
                console.log("finished proccess, clearing inputs values")
                this.videoIdInput.current.value = ""
                this.channelThumbnailInput.current.value = ""
                console.log("inputs value have been reset, ready for another go")
              })
            }
            if (data.length == 0) {
              console.log(`channel does not exist, creating ${channelInfo.title}`)
              fetch(`/api/channel`,
                {
                  method: 'POST',
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify(channelInfo)
                })
                .then(res => res.json())
                .then(data => {
                  videoInfo.channel = data._id
                  fetch(`/api/video`,
                    {
                      method: 'POST',
                      headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify(videoInfo)
                    })
                    .then(() => {
                      console.log("finished proccess, clearing inputs values")
                      this.videoIdInput.current.value = ""
                      this.channelThumbnailInput.current.value = ""
                      console.log("inputs value have been reset, ready for another go")
                    })
                })
            }
          })
      })
  }

  render() {
    return (
      <div className="addVideoPage" >
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