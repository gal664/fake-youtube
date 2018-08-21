let posts = require("./posts.json");
const express = require('express');
const fs = require('fs');
const router = express.Router();
const collection = require("./collection.js");

function getPost(id) {
      return posts.find(post => post.id == id);
}

router.get('/', (req, res) => {
      collection
            .getAllPosts()
            .then(data => res.send(data));
});

router.post('/', (req, res) => {
      let post = getPost(req.body.id);
      if (!post) {
            posts.push(req.body);
            res.status(201).send(req.body)
      } else {
            res.status(400).send(`post with id ${req.body.id} already exists`);
      }
      fs.writeFileSync(`${__dirname}./posts.json`, JSON.stringify(posts));
});

router.get('/:postId', (req, res) => {
      collection
            .getPost(req.params.postId)
            .then(data => res.send(data));
});

module.exports = router;