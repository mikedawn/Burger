var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.port || 3000;

var app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./Connect/orm");

app.use("./Connect/connectiion.js", routes);

app.listen(port);