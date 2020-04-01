// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
<<<<<<< HEAD
=======
// var PORT = this_is_for_heroku || this_is_for_localhost
>>>>>>> 410efb01e97beda7f3b18fefbd945bf3777debf6
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
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // chad likes a RegEx app called Regexr: https://regexr.com/
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase(); // <- /lukeskywalker
  // ^^ this regex replaces all whitespaces ("\s+"" means "1 or more whitespace") with no string
  // so we are creating a property called routeName on our newCharacter object.
  // then we replace the character's name with a string that strips all whitespaces and 
  // casts the character's name to lower case.
  // if we type "LuKE        skyWALKKER", this expression will normalize the string to
  // "lukeskywalker".
  // if our initial object looks like this: {"name": "LuKE        skyWALKER"}
  // our new object will be: {"name": "LuKE        skyWALKER", "routeName": "lukeskywalker"}

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
