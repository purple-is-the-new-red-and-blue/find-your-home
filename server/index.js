var path = require('path');
var request = require('request');
var express = require('express');

var app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/csv', express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('listening');
}); 