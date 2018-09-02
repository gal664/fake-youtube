const db = require('../db');

const videoSchema = new db.Schema({
      channel_id: Number,
      title: String,
      author_id: String,
      thumbnail: String,
      length: String,
      views: Number,
      time_uploaded: Date,
})

const Video = db.model('video', videoSchema);

module.exports = Video;