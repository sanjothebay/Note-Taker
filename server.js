// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// array for save notes
// =============================================================
var notes = [];



//Ensure that you have at least one HTML page being served at the "/" route. Example:
//app.get("/", function(req, res) {
  //res.json(path.join(__dirname, "public/index.html"));
//});


// Basic route that sends the user first to the AJAX Page

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Basic API routes that sends the user first to the db.json

app.get("/api/notes", function (req, res) {
  res.json(path.join(__dirname, "db.json"));
});

app.post("/api/notes", function (req, res) {
  res.json(path.join(__dirname, "db.json"));
  var newObject = req.body;
  reservations.push(newObject);
  console.log(newObject);
  res.json(newObject);
});

/// Basic API routes that sends the user  to the db.json DELETE
app.delete("/api/notes/:id", function (req, res) {
  res.json(path.join(__dirname, "db.json"));
});

// listening to the port and consollogging if it works
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
