//======================================================================
// Define the express server
//======================================================================
var express = require('express');
var app = express();

//======================================================================
// Set the port of our application or process.env.PORT lets the port be set by Heroku
//======================================================================
var PORT = process.env.PORT || 8080;

//======================================================================
// Declare the location of public files to expose
//======================================================================
app.use(express.static("public"));

//======================================================================
// Sets up the Express app to handle data parsing
//======================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//======================================================================
// Set up the usage of express handlebars
//======================================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//======================================================================
// Require the controller code
//======================================================================
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

//======================================================================
// Start our server so that it can begin listening to client requests.
//======================================================================
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
