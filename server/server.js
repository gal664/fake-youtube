const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const users = require("./users");
const videos = require("./videos");
const lists = require("./lists");

server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
});

server.use(bodyParser.json());

server.use("/api/users", users);

server.use("/api/videos", videos);

server.use("/api/lists", lists);

server.listen(9090);
