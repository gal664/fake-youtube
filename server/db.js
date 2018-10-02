const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fake-youtube');

module.exports = mongoose;