// using https://www.npmjs.com/package/youtube-info for video info
// using https://www.npmjs.com/package/youtube-comment-api for video comments

const express = require("express");
const router = express.Router();
const fetchVideoInfo = require("youtube-info");

// scrapes the video data and creates an object to match video model
router.get('/:videoId', (req, res) => {
      fetchVideoInfo(req.params.videoId)
            .then(data => {
                  let parsedDuration = new Date(null);
                  parsedDuration.setSeconds(data.duration);
                  parsedDuration = parsedDuration.toISOString().substr(11, 8);
                  
                  data = {
                        channel: {
                              title: data.owner,
                              icon: null,
                              youtubeId: data.channelId
                        },
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
                  };
            })
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message));
})

module.exports = router;