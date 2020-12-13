var path = require("path");

var title = [];
var notes = [];



module.exports = function (app) {
  // Basic API routes that sends the user first to the db.json

  app.get("/api/notes", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
  });

  app.post("/api/notes", function (req, res) {
    title.push(req.body);
    notes.push(req.body);
    console.log(title);
    res.json(req.body);
  });

  /// Basic API routes that sends the user  to the db.json DELETE
  app.delete("/api/notes/:id", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
    title.delete(req.body);
    notes.delete(req.body);
 
    res.json(req.body);
  });
};
