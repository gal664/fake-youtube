const Channel = require("./channelModel");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      Channel.find({})
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.post('/', (req, res) => {
      const channel = new Channel(req.body);
      channel.save()
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

module.exports = router;