const connectDb = require("../db");
const { ObjectId } = require('mongodb');

function getPostsCollection(db) {
      return connectDb()
            .then(db => {
                  return db.collection("posts");
            });
};

function getAllPosts() {
      return getPostsCollection()
            .then(collection => {
                  return collection.find({}).toArray();
            });
};
function getPost(id) {
      return getPostsCollection()
            .then(collection => {
                  return collection.findOne({ _id: ObjectId(id) });
            });
};

module.exports = {
      getAllPosts,
      getPost
}