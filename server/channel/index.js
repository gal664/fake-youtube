const Channel = require("./channelModel");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      Channel.find({})
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.get('/:channelId', (req, res) => {
      Channel.findById(req.params.channelId)
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.post('/', (req, res) => {
      const channel = new Channel(req.body);
      channel.save()
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.put('/:channelId', (req, res) => {
      Channel.findByIdAndUpdate(req.params.channelId,
            req.body,
            { new: true },
            (err, data) => {
                  if (err) return res.status(500).send(err);
                  return res.send(data);
            }
      )
});

module.exports = router;