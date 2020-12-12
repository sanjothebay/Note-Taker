var path = require("path");




module.exports = function (app) {
  // Basic API routes that sends the user first to the db.json

  app.get("/api/notes", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
  });

  app.post("/api/notes", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
    var newObject = req.body;
    notes.push(newObject);
    console.log(notes);
    res.json(newObject);
  });

  /// Basic API routes that sends the user  to the db.json DELETE
  app.delete("/api/notes/:id", function (req, res) {
    res.json(path.join(__dirname, "db.json"));
  });
};
