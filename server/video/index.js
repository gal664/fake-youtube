const Video = require("./videoModel");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { channel, id, query } = req.query;
  let filter = {};
  if (channel) filter.channel = channel;
  if (id) filter._id = id;
  if (query) {
    const rgx = new RegExp(query, "i");
    filter.$or = [{ body: rgx }, { title: rgx }];
  }

  Video.find(filter)
    .populate("channel")
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

router.post("/", (req, res) => {
  const video = new Video(req.body);
  video
    .save()
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

module.exports = router;
