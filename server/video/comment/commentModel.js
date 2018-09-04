const db = require('../../db');
const { Schema } = require('mongoose');

const commentSchema = new db.Schema({
      video: {
            type: Schema.Types.ObjectId,
            ref: "video"
      },
      body: String,
      author: String,
      time_uploaded: { type: Date, default: Date.now },
})

const comment = db.model('comment', commentSchema);

module.exports = comment;