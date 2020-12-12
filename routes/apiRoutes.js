var path = require("path");

var notes = [""];
var title = [""];


module.exports = function (app) {
  // Basic API routes that sends the user first to the db.json

  app.get("/api/notes", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
  });

  app.post("/api/notes", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
    notes.push(req.body);
    title.push(req.body);
    console.log(notes);
    console.log(title);
    res.json(req.body);
  });

  /// Basic API routes that sends the user  to the db.json DELETE
  app.delete("/api/notes/:id", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
    notes.delete(req.body);
    title.delete(req.body);
    console.log(notes);
    res.json(req.body);
  });
};
