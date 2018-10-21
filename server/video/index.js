const Video = require("./videoModel");
const express = require("express");
const router = express.Router();
const fetchVideoInfo = require("youtube-info");

// get all videos
router.get("/", (req, res) => {
  const { channel, query } = req.query;
  let filter = {};
  if (channel) filter.channel = channel;
  if (query) {
    const rgx = new RegExp(query, "i");
    filter.$or = [{ body: rgx }, { title: rgx }];
  }

  Video.find(filter)
    .populate("channel")
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

// get video by id
router.get("/:videoId", (req, res) => {
  Video.findById(req.params.videoId)
    .populate("channel")
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

// delete video by id
router.delete("/:videoId", (req, res) => {
  let id = req.params.videoId;
  Video.findByIdAndRemove(id)
    .catch(e => res.status(400).send(e.message))
    .then(() => {
      const response = {
        success: true,
        id: id
      };
      res.send(response);
    });
});

// create video
router.post("/", (req, res) => {
  const video = new Video(req.body);
  video
    .save()
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

// scrapeVideoUrl
router.post("/scrape/:videoId", (req, res) => {
  const videoId = req.params.videoId;

  fetchVideoInfo(videoId)
    .then(videoInfo => {
      // check if channel exists
      //if true = video.channelId = get channel by youtube id
      //if false = create channel using channelId, owner and thumbnail

      //     let channel = {
      //       title: videoInfo.owner,
      //       icon: req.body.channelThumbnailUrl,
      //       youtubeId: videoInfo.channelId,
      // }

      // creating the video
      let parsedDuration = new Date(null);
      parsedDuration.setSeconds(videoInfo.duration);
      parsedDuration = parsedDuration.toISOString().substr(11, 8);
      videoInfo = {
        youtubeId: videoInfo.videoId,
        title: videoInfo.title,
        description: videoInfo.description,
        thumbnail: videoInfo.thumbnailUrl,
        videoSrc: videoInfo.url,
        length: parsedDuration,
        views: videoInfo.views,
        time_uploaded: new Date(videoInfo.datePublished).toISOString(),
        likeCount: videoInfo.likeCount,
        dislikeCount: videoInfo.dislikeCount,
      }
      const video = new Video(videoInfo);
      video
        .save()
        .then(data => res.send(data))
        .catch(e => res.status(400).send(e.message));
    })
})

module.exports = router;
