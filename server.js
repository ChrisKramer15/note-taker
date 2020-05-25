//declare dependencies
var express = require("express");
var path = require("path");

//declare express method and port identifier
var app = express();
var PORT = 9001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route that sends user notes html page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  //listen to port for server activation
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });





