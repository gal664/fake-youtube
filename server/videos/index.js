const Videos = require("./videosModel");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      let filter = {}
      if (req.query.channel_id) {
            filter = { channel_id: req.query.channel_id }
      }
      Videos.find(filter)
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.get('/:videoId', (req, res) => {
      Videos.find({ id: req.params.videoId })
            .then(video => {
                  if (video)
                        res.send(video);
                  else
                        res.status(404).send('video not found');
            }).catch(e => res.status(400).send(e.message))
});

module.exports = router;