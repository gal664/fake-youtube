const Channel = require("./channelModel");
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
      const { id, query } = req.query;
      let filter = {};
      if (id) filter._id = id;
      if (query) {
            const rgx = new RegExp(query, "i");
            filter.$or = [{ body: rgx }, { title: rgx }];
      }
      
      Channel.find(filter)
      .then(data => res.send(data))
      .catch(e => res.status(400).send(e.message));
});

router.post('/', (req, res) => {
      const channel = new Channel(req.body);
      channel.save()
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

module.exports = router;