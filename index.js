/** @format */

// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require("express");
const HTTP_SERVER = express();
const cors = require("cors");
var bodyParser = require("body-parser");

HTTP_SERVER.use(cors());
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

// BASIC SERVER CONFIG
const port = 5000;
HTTP_SERVER.use(bodyParser.json());

HTTP_SERVER.listen(port, "localhost", () => {
  console.log("SERVER STARTED IN THE PORT", port);
});
// console.log(`Hello Node.js v${process.versions.node}!`);

HTTP_SERVER.use("/", (request, response, next) => {});
