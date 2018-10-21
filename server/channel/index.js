const Channel = require("./channelModel");
const express = require('express');
const router = express.Router();

// get all channels
router.get("/", (req, res) => {
      const { id, query } = req.query;
      let filter = {};
      if (id) filter.youtubeId = id;
      if (query) {
            const rgx = new RegExp(query, "i");
            filter.$or = [{ body: rgx }, { title: rgx }];
      }
      
      Channel.find(filter)
      .then(data => res.send(data))
      .catch(e => res.status(400).send(e.message));
});

// get channel by id
router.get("/:channelId", (req, res) => {
      Channel.findById(req.params.channelId)
      .then(data => res.send(data))
      .catch(e => res.status(400).send(e.message));
});

// delete channel by id
router.delete("/:channelId", (req, res) => {
      let id = req.params.channelId
      Channel.findByIdAndRemove(id)
      .catch(e => res.status(400).send(e.message))
      .then(() => {
            const response = {
                  success: true,
                  id: id
            };
            res.send(response)
      })
});

// create channel
router.post('/', (req, res) => {
      const channel = new Channel(req.body);
      channel.save()
      .then(data => res.send(data))
      .catch(e => res.status(400).send(e.message))
});

module.exports = router;