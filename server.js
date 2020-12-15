// Dependencies
var express = require("express");
//var path = require("path");
//const util = require("util");
// =============================================================================
// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
//app.use("/api", apiRoutes);
//app.use("/", htmlRoutes);
// =============================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
htmlRoutes = require("./routes/htmlRoutes")(app);
apiRoutes = require("./routes/apiRoutes")(app);
// LISTENER
// The below code effectively "starts" our server listening to the port and consollogging if it works
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
