const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const video = require("./video");
const channel = require("./channel");

server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
});

server.use(bodyParser.json());

server.use("/api/video", video);

server.use("/api/channel", channel);

server.listen(9090);
