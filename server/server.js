const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const gif = require("./gif");
const users = require("./users");
const posts = require("./posts");

server.use(bodyParser.json());

server.use("/gif", gif);

server.use("/users", users);

server.use("/posts", posts);

server.listen(3000);
