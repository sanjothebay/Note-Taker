// Dependencies
// =============================================================
var path = require("path");

// Basic route that sends the user first to the AJAX Page

module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    .catch(error) {
      return res.status(400).json({ error: error.toString() });
    } 
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};