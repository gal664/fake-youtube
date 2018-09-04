const Video = require("./videoModel");
const express = require('express');
const comment = require('./comment');
const router = express.Router();

router.get('/', (req, res) => {
      const { channel, query } = req.query;
      let filter = {}
      if (channel) filter.channel = channel;
      if (query) {
            const rgx = new RegExp(query, "i");
            filter.$or = [
                  { body: rgx },
                  { title: rgx },
            ]
      };

      Video.find(filter)
            .populate("channel")
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.post('/', (req, res) => {
      const video = new Video(req.body);
      video.save()
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.get('/:videoId', (req, res) => {
      Video.find({ id: req.params.videoId })
            .then(video => {
                  if (video)
                        res.send(video);
                  else
                        res.status(404).send('video not found');
            }).catch(e => res.status(400).send(e.message))
});

router.use("/:videoId/comment", comment);

module.exports = router;