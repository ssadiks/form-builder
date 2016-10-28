// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/towers'); // connect to our database

var routerTower = require('./routes/tower.routes');
// REGISTER OUR ROUTES -------------------------------
app.use('/api', routerTower);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);