var express = require('express');
var app = express();

var logger = require('morgan');

var PORT = process.env.PORT || 8000;

var mongoose = require('mongoose');
var db = 'mongodb://';

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

app.get('/', function(req,res){
res.sendFile( '/index.html');
});

app.listen(PORT, function(){
  console.log('Listening on ', PORT);
});