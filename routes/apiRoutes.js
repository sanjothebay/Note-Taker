var express = require("express");

var StoringMethodes = require("../db/store");

module.exports = function (app) {
  // Basic API routes that sends the user first to the db.json
  app.get("/api/notes", function (req, res) {
    console.log("Test log")
    StoringMethodes.parseNotesFuction()
    .then((readnotes) => {
      console.log(readnotes);
      res.json(readnotes)});
  });

  app.post("/api/notes", function (req, res) {
    StoringMethodes.parseNotesFuction()
    .then((readnotes) => {
      readnotes.push(req.body)
    return readnotes })
    .then((readnotes) => {
      StoringMethodes.addingNotesFucntion(readnotes)
      .then((readnotes) => res.json(readnotes));
    });
  });
  /// Basic API routes that sends the user  to the db.json DELETE
  app.delete("/api/notes/:id", function (req, res) {
    StoringMethodes.removingNotesFunction(req.params.id)
    .then(() => res.json({ ok: true })); // status 200 is default
  });
};
