var express = require('express');
var path = reequire('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  // CORS Headers
  res.header('Access-Control-Allow-Origin', '*'); // Restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  // Set Custom Headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, X-Access-Token, X-Key');
  if (req.method = 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});