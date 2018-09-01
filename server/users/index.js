const User = require("./usersModel");
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
      const user = new User(req.body);
      user.save()
            .then(user => res.send(user))
            .catch(e => res.status(400).send(e.message))
});

router.get('/', (req, res) => {
      User.find({})
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

router.get('/:userId', (req, res) => {
      User.findById(req.params.userId)
            .then(user => {
                  if (user)
                        res.send(user);
                  else
                        res.status(404).send('user not found');
            }).catch(e => res.status(400).send(e.message))
});

router.delete('/:userId', (req, res) => {
      User.findByIdAndDelete(req.params.userId)
            .then(user => {
                  if (user)
                        res.send(user);
                  else
                        res.status(404).send('user not found');
            }).catch(e => res.status(400).send(e.message))
});

router.put('/:userId', (req, res) => {
      User.findByIdAndUpdate(req.params.userId, req.body)
            .then(user => {
                  if (user)
                        res.send(user);
                  else
                        res.status(404).send('user not found');
            })
            .catch(e => res.status(400).send(e.message))
});

module.exports = router;