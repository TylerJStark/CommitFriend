//Bringing Express in
var express = require("express");
var app = express();

//Setting the port to 8080 or whatever Heroku determines
var PORT = process.env.PORT || 8080;

//Used to parse the data to be sent around the application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Bringing in the apiRoutes and htmlRoutes files in
require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app);

//Starting the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});