const db = require('../db');

const listSchema = new db.Schema({
      title: String,
      id: Number,
})

const List = db.model('list', listSchema);

module.exports = List;