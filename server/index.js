var path = require('path');
var request = require('request');
var express = require('express');

var app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/analysis', express.static( __dirname, '../public/analysis' ) );
app.get("/analysis", function(req, res){
  res.sendFile(path.join(__dirname, '../public/analysis.html')); 
});

app.listen(3000, function() {
  console.log('listening');
}); 