const db = require('../db');

const channelSchema = new db.Schema({
      title: String,
      icon: String
})

const Channel = db.model('channel', channelSchema);

module.exports = Channel;