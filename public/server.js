// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

// Basic API routes that sends the user first to the db.json

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
  });

  app.post("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
  });

  /// Basic API routes that sends the user  to the db.json DELETE 
  app.delete("/api/notes/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
  });


// listening to the port and consollogging if it works 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });