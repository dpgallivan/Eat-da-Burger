var express = require('express');
var app = express();
var burger = require('../models/burger.js');

app.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

app.post('/burgers', function(req, res) {
  burger.create(['burger_name'], 
    [req.body.burger_name], function(data) {
    res.redirect('/');
  });
});

app.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update({
    'devoured': req.body.devoured},
     condition, function(data) {
    res.redirect('/');
  });
});
module.exports = app;