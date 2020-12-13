//var path = require("path");
//var fs = require("fs");
var StoringMethodes = require("../db/store.js");

module.exports = function (app) {
  // Basic API routes that sends the user first to the db.json
  app.get("/api/notes", function (req, res) {
    StoringMethodes.readFunction().then((readnotes) => res.json(readnotes));
  });

  app.post("/api/notes", function (req, res) {
    StoringMethodes.addingNotesFucntion(req.body).then((readnotes) =>
      res.json(readnotes)
    );
  });
  /// Basic API routes that sends the user  to the db.json DELETE
  app.delete("/api/notes/:id", function (req, res) {
    StoringMethodes.removingNotesFunction(req.params.id).then(() =>
      res.json({ ok: true })
    ); // status 200 is default
  });
};
