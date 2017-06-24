"use strict";

const express = require("express");
const pg = require("pg");
const retry = require("retry");

const operation = retry.operation({ retries: 3 });

operation.attempt(function(attempt) {
  var client = new pg.Client();

  client.connect(function(e) {
    client.end();
    if (operation.retry(e)) {
      return;
    }
    if (!e) console.log("Hello Postgres!");
  });
});

// Constants
const PORT = 5000;

// App
const app = express();
app.get("/api", function(req, res) {
  res.send("Hello api!");
});

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
