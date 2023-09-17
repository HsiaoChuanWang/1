var express = require('express');
var app = module.exports = express();
app.use('/getData',require('./getData.js'))
app.use('/',require('./sum.js'))

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

