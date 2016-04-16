var express = require('express');
var app = express();
var bcrypt = require('bcryptjs');
var passport = require('passport');
var passportLocal = require('passport-local');
var logger = require('morgan');
var mongoose = require('mongoose');

var PORT = process.env.PORT || 8000;

//http
var request = require('request');
require('dotenv').config();


//heroku mongoose connection
//var db = 'mongodb://heroku_jwhnzdgf:6rlfhm48v9lq0nb6ath03qat01@ds011800.mlab.com:11800/heroku_jwhnzdgf'

//local mongoose connection
//var db = 'mongodb://localhost/beer_db';


if(process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.MONGOLAB_URI);
  var db = process.env.MONGOLAB_URI;
}
else {
  // LOCAL DB
  var db = 'mongodb://localhost/beer_db';
}

mongoose.connect(db);


var User = require('./models/user');
var Beer = require('./models/beer');

//body-parser setup - middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//setup for passport - middleware
app.use(require('express-session')({
    secret: 'abcd',
    resave: true,
    saveUninitialized: true,
    cookie : { secure : false, maxAge : (240 * 60000) }, // 4 hours
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.use(logger('dev'));

//passport use method as callback when being authenticated
passport.use(new passportLocal.Strategy(function(username, password, done) {
  //check password in db
  User.findOne({
      username: username
    }).then(function(user) {
    if(user) {
      bcrypt.compare(password, user.password, function(err, bcryptUser) {
        if (bcryptUser) {
          //console.log("bcrypt user exists");
          //if password is correct authenticate the user with cookie
          done(null, user);
        }
        else {
          //console.log("bcrypt user does not exist");
          done(null, {msg: false});
        }
      });
    }
    else {
      done(null, {msg: false});
    }
  });
}));

//change the object used to authenticate to a smaller token, and protects the server from attacks
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.get('/*',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

//posts the create account form information to mongodb
app.post('/createAccount', function(req, res) {
  console.log(req.body);
  var user = new User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  });

  User.findOne({username: req.body.username}).exec(function(err, user1) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      if (user1 === null) {
        user.save();
        res.json(user1);
        console.log('user saved');
      } else {
        res.json(user1);
        console.log("user exists");
      }
    }
  });
});

//route to login
app.post('/login', passport.authenticate('local'), function(req, res) {
    //console.log(req.body);
    if(req.user) {
      res.json(req.user);
    } else {
      res.json({});
    }
  });

//route to log out
app.post('/logout', function(req, res){
  req.logOut();
  res.send({msg: "loggedout"});
  console.log("the logout route was hit")
});


app.post('/apiCall', function(req,res){
  var apiUrl = 'http://api.brewerydb.com'
  var replaced = req.body.search.replace(/ /g, '%20');
  if(req.body.searchType == 'Postal Code'){
    apiUrl += '/v2/locations/?key=99a3c1bfb6b01f411310b5b729f48491&postalCode=' + req.body.search
  }
  if(req.body.searchType == 'City'){
        apiUrl += '/v2/locations/?key=99a3c1bfb6b01f411310b5b729f48491&locality=' + replaced
  }
  if(req.body.searchType == 'State'){
        apiUrl += '/v2/locations/?key=99a3c1bfb6b01f411310b5b729f48491&region=' + replaced
  }
  request(apiUrl, function(err, response, body) {
    res.json(body)
  })
})
app.post('/beerApiCall', function(req,res){
    var apiUrl = 'http://api.brewerydb.com/v2/brewery/'+ req.body.id +'/beers/?key=99a3c1bfb6b01f411310b5b729f48491'
    request(apiUrl, function(err, response, body) {
      res.json(body)
    })
})
app.post('/navbarApiCall', function(req,res){
  var apiUrl
  var replaced = req.body.name.replace(/ /g, '%20');
  console.log(req.body.type);
  if(req.body.type == 'Beer'){
    apiUrl = 'http://api.brewerydb.com/v2/beers/?key=99a3c1bfb6b01f411310b5b729f48491&name=' + replaced
  }
  if(req.body.type == 'Brewery'){

    apiUrl = 'http://api.brewerydb.com/v2/breweries/?key=c356754ec7ae15423029d49c154921c0&name=*' + replaced + '*'

  }
  console.log('url: ' + apiUrl);
    request(apiUrl, function(err, response, body) {
      res.json(body)
    })
})
app.post('/favorite', function(req,res){
  User.findOne({username: req.body.user}).then(function(response){
    User.favoriteBeers.push(req.body.beerId)
  })
})
app.post('/favoriteBeers', function(req,res){
  var ids = req.body.favBeersId
  var idUrl
  for(var i=0;i<ids.length;i++){
    if(i == (ids.length -1){
      idUrl += ids[i]
    }
    else{
      idUrl += ids[i] + ','
    }

  }
  apiUrl = 'http://api.brewerydb.com/v2/beers/?key=99a3c1bfb6b01f411310b5b729f48491&ids=' + idUrl
  request(apiUrl, function(err,response,body){
    res.json(body)
  })
})


app.listen(PORT, function(){
  console.log('Listening on ', PORT);
});
