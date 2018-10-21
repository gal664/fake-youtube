// using https://www.npmjs.com/package/youtube-info for video info
// using https://www.npmjs.com/package/youtube-comment-api for video comments

// const express = require("express");
// const router = express.Router();
// const fetchCommentPage = require('youtube-comment-api')

// get video comments by youtube id
// router.get("/:videoId/comments", (req, res) => {
//   const videoId = req.params.videoId
//   fetchCommentPage(videoId)
//     .then(commentPage => res.send(commentPage.comments))
//     .catch(e => res.status(400).send(e.message));
// });

// module.exports = router;