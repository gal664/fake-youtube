const db = require('../db');
const { Schema } = require('mongoose');

const videoSchema = new db.Schema({
      channel: {
            type: Schema.Types.ObjectId,
            ref: "channel"
      },
      title: String,
      thumbnail: String,
      length: String,
      views: Number,
      time_uploaded: Date,
})

const Video = db.model('video', videoSchema);

module.exports = Video;