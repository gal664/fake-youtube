const express = require('express');
const router = express.Router();

router.get('/cats', (req, res) => {
      res.send('<img src="http://thecatapi.com/api/images/get?format=src&type=gif">')
});

router.get('/dogs', (req, res) => {
      res.send('<img src="https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif">')
});

module.exports = router;