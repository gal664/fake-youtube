const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const users = require("./users");

server.use(bodyParser.json());

server.use("/users", users);

server.listen(3000);
