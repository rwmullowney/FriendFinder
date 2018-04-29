// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var nodemon = require("nodemon");

var app = express();

var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Points our server to route files
// Note that in the Hot Restaurant site they have (app) after each require statement - 
// but when I tried that here it gave me errors
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});