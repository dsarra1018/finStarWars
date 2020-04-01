// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = this_is_for_heroku || this_is_for_localhost
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.send("Welcome to Star Wars App!");
});

// Displays a single character, or returns false
// THIS CALL WILL USE A "PATH PARAMETER"
// The URL would be http://localhost:3000/api/characters/yoda
app.get("/api/characters/:character", function(req, res) {
  let chosen = req.params.character; // compare to using a QUERY PARAMETER
  console.log(req.params);
  console.log(`the character's name via path parameter: ${chosen}`);
  res.end();
});
// Path parameters are used to create a route to a specific page or script
// For example, to serve a dedicated page about yoda

// Displays a single character 
// THIS CALL WILL USE A "QUERY PARAMETER"
// The URL would be: http://localhost:3000/api/characters?name=yoda 
app.get("/api/characters", function(req, res) {
  var chosen = req.query.name;  // compare to using a PATH PARAMETER
  console.log(req.query);
  console.log(`the character's name via query parameter: ${chosen}`);
  res.end();
});
// query parameters are used to filter results
// for example, say that all of our characters are in a database
// and we want to search for a specific one by name, say yoda.
// we can use a query param to filter for him.


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
