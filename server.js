var express = require('express')
var app = express()
var bcrypt = require('bcryptjs');
var passport = require('passport');
var passportLocal = require('passport-local');

var logger = require('morgan')

var PORT = process.env.PORT || 8000

var mongoose = require('mongoose')

//mongoose connection
//var db = 'mongodb://'
var db = 'mongodb://localhost/beer_db';
mongoose.connect(db);

var User = require('./models/user');

//body-parser setup
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//setup for passport
app.use(require('express-session')({
    secret: 'abcd',
    resave: true,
    saveUninitialized: true,
    cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }, // 4 hours
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))

//passport use method as callback when being authenticated
// passport.use(new passportLocal.Strategy(function(email, password, done) {
//   //check password in db
//   console.log("the password is " + password);
//   var password = req.body.password;
//   User.findOne({
//       email: email
//     }).then(function(user) {
//     if(user) {
//       console.log("The password is " + password);
//       console.log("The hash is " + user.password);
//       bcrypt.compare(password, user.password, function(err, bcryptUser) {
//         console.log("The bcryptUser is " + bcryptUser);
//         if (bcryptUser) {
//           console.log("bcrypt user exists");
//           //if password is correct authenticate the user with cookie
//           done(null, user);
//         }
//         else {
//           console.log("bcrypt user does not exist");
//           done(null, null);
//         }
//       });
//     }
//     else {
//       done(null, null);
//     }
//   });

// }));

//change the object used to authenticate to a smaller token, and protects the server from attacks
passport.serializeUser(function(user, done) {
  //console.log('in serializeUser', user);
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  //console.log('in deserializeUser', user);
  done(null, user);
});


app.get('*',function(req,res){
  res.sendFile(process.cwd() + '/public/login.html')
})

//posts the create account form information to mongodb
app.post('/createAccount', function(req, res) {
  console.log(req.body);
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({email: req.body.email}).exec(function(err, user1) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      if (user1 === null) {
        user.save();
        console.log('user saved');
      } else {
        console.log("user exists");
      }
    }
  });

  // user.save(function(err) {
  //   if (err) {
  //     console.log(err);
  //     res.send(err);
  //   } else {
  //     User.find({}).then(function(dbUser) {
  //       //console.log(" contact me" + dbUser);
  //       res.json(dbUser);
  //     });
  //   }
  // });
});


// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/?msg=Login Credentials do not work'
// }));

app.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({
      email: email
    }).then(function(user) {
    if(user) {
      console.log("The hash is " + user.password);
      bcrypt.compare(password, user.password, function(err, bcryptUser) {
        console.log("The bcryptUser is " + bcryptUser);
        if (bcryptUser) {
          console.log("bcrypt user password is correct");
          //if password is correct authenticate the user with cookie
          //done(null, user);
        }
        else {
          console.log("bcrypt password is not correct");
          //done(null, null);
        }
      });
    }
    else {
      console.log("the email does not exist");
      //done(null, null);
    }
  });

  // User.find({email: req.body.email, password: req.body.password}).exec().then(function(dbUser) {
  //   console.log(" db user" + dbUser);
  //   res.json(dbUser);
  // });
});

app.listen(PORT, function(){
  console.log('Listening on ', PORT);
});
