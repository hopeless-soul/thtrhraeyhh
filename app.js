var express = require('express');
var app = express();
var router = require('./routes/index')
// var monggose = require('mongoose');


// app.use(express.json);
app.use(router);


module.exports = app;
