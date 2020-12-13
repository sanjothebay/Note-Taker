var path = require("path");
var fs = require("fs");
var StoringMethodes = require("../db/store.js");

var title = [];
var notes = [];

module.exports = function (app) {
  // Basic API routes that sends the user first to the db.json

  app.get("/api/notes", function (req, res) {
    StoringMethodes.readFunction()
    .then((readnotes) => res.json(readnotes))
    
  });

  app.post("/api/notes", function (req, res) {
    addingNotesFucntion.readFunction()
    .then((readnotes) => res.json(readnotes))
  });

  /// Basic API routes that sends the user  to the db.json DELETE
  app.delete("/api/notes/:id", function (req, res) {
    removingNotesFunction()
    .then((readnotes) => res.json(readnotes))
  });
};
