let users = require("./users.json");
const express = require('express');
const fs = require('fs');
const router = express.Router();
const collection = require("./collection.js");

function getUser(id) {
      return users.find(user => user.id == id);
}

router.get('/', (req, res) => {
      collection
            .getAllUsers()
            .then(data => res.send(data));
});

router.post('/', (req, res) => {
      let user = getUser(req.body.id);
      if (!user) {
            users.push(req.body);
            res.status(201).send(req.body)
      } else {
            res.status(400).send(`user with id ${req.body.id} already exists`);
      }
      fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
});

router.get('/:userId', (req, res) => {
      collection
            .getUser(req.params.userId)
            .then(data => res.send(data));
});

module.exports = router;