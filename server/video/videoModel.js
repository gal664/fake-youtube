const db = require('../db');
const { Schema } = require('mongoose');

const videoSchema = new db.Schema({
      youtubeId: {type: String, default: ""},
      channel: {
            type: Schema.Types.ObjectId,
            ref: "channel"
      },
      title: {type: String, default: ""},
      description: {type: String, default: ""},
      thumbnail: {type: String, default: ""},
      videoSrc: {type: String, default: ""},
      length: {type: String, default: "0:00"},
      views: {type: Number, default: 0},
      time_uploaded: {type: Date, default: new Date()},
})

const Video = db.model('video', videoSchema);

module.exports = Video;