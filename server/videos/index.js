const Videos = require("./videosModel");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      Videos.find({})
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.get('/:channel_id', (req, res) => {
      Videos.find({ channel_id: req.params.channel_id })
            .then(videos => {
                  if (videos)
                        res.send(videos);
                  else
                        res.status(404).send('video not found');
            }).catch(e => res.status(400).send(e.message))
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