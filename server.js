var express = require('express');
var path    = require('path');
var Bourne  = require('bourne');
// using componets from node require
var app      = express()
  , posts    = new Bourne('simpleBlogPosts.json')
  , comments = new Bourne('simpleBlogComments.json');
// configuration for the app
app.configure(function () {
  app.use(express.json);
  app.use(express.static(path.join(__dirname, 'public')));
});
// create the route method
app.get('/*', function (req, res) {
  res.render('index.ejs');        
});

