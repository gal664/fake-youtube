const Comment = require("./commentModel");
const express = require('express');
const router = express.Router({mergeParams:true});

router.get('/', (req, res) => {
      const {video, query} = req.query;
      let filter = {
            video: req.params.videoId
      }
      if (video) filter.video = video;
      if (query) filter.body = new RegExp(query, "i");

      Comment.find(filter)
            .populate("video")
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.post('/', (req, res) => {
      req.body.videoId = req.params.videoId;
      const comment = new Comment(req.body);
      comment.save()
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.get('/:commentId', (req, res) => {
      comment.findById(req.params.commentId)
            .then(comment => {
                  if (comment)
                        res.send(comment);
                  else
                        res.status(404).send('Comment not found');
            }).catch(e => res.status(400).send(e.message))
});

module.exports = router;