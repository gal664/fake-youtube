const Lists = require("./listsModel");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      Lists.find({})
            .then(data => res.send(data))
            .catch(e => res.status(400).send(e.message))
});

module.exports = router;