// declare dependencies
const express = require("express"); // the server & middleware
const path = require("path"); // helper to create paths to files

// instantiate app and set port number
const app = express();
// PORT = for_heroku || for_localhost
let PORT = process.env.PORT || 3000;

// configure app to handle json in the
// request body when using POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// the standard get call
app.get("/api/characters", (request, response) => {
  return response.json(characters); // return all characters
});

// the standard get call with a path parameter
app.get("/api/characters/:parameter", (request, response) => {
  return response.json(parameter);      // return the parameter object as json
});

// the standard post call
// a json object must be posted via the body, using
// either a web form, postman, or a curl call
app.post("/api/characters", (request, response) => {
  let jsonObject = request.body;              // this is the json object we posted via the body
  return response.json(jsonObject);           // this returns a copy of the json object
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
