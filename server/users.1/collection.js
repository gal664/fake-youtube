const connectDb = require("../db");
const { ObjectId } = require('mongodb');

function getUsersCollection(db) {
      return connectDb()
            .then(db => {
                  return db.collection("users");
            });
};

function getAllUsers() {
      return getUsersCollection()
            .then(collection => {
                  return collection.find({}).toArray();
            });
};
function getUser(id) {
      return getUsersCollection()
            .then(collection => {
                  return collection.findOne({ _id: ObjectId(id) });
            });
};

module.exports = {
      getAllUsers,
      getUser
}