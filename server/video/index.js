const Video = require("./videoModel");
const express = require("express");
const router = express.Router();

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

router.get("/:videoId", (req, res) => {
  Video.findById(req.params.videoId)
    .populate("channel")
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

router.delete("/:videoId", (req, res) => {
  let id = req.params.videoId
  Video.findByIdAndRemove(id)
  .catch(e => res.status(400).send(e.message))
  .then(() => {
    const response = {
        message: "video successfully deleted",
        id: id
    };
    res.send(response)
  })
});


router.post("/", (req, res) => {
  const video = new Video(req.body);
  video
    .save()
    .then(data => res.send(data))
    .catch(e => res.status(400).send(e.message));
});

module.exports = router;
