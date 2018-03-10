const express = require('express');
const fs = require('fs-extra');
var session = require('express-session');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const http = require('http');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

// Init
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Connect to DB
const connection = (closure) => {
  return MongoClient.connect('mongodb://admin2:admin2@ds157521.mlab.com:57521/usgz', (err, db) => {
      if (err) return console.log(err);

      closure(db);
  });
};

// PassportJS conf
app.use(cookieParser('usgz brije'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'usgz brije',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    connection((db) => {
        db.collection('users')
            .find({_id: id}, (err, user) => {
                done(err, user);
            });
    });
});

// PassportJS
passport.use(new LocalStrategy(
  function(username, password, done) {
    connection((db) => {
        db.collection('users')
            .findOne({ username: username }, (err, user) => {
                if(err || !user) {
                    return done(null, false, { message: 'Netočno korisničko ime.' });
                }
                bcrypt.compare(password, user.password, (err, res) => {
                  if(err || !res) {
                    return done(null, false, { message: 'Netočna lozinka.' });
                  } else {
                    return done(null, user);
                  }
                });
            });
    });
  }
));

// Check if logged in
function loggedIn(req, res, next) {
  if(req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Index page
app.get('/', loggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Uploads folder
app.use(express.static(path.join(__dirname, 'uploads')));

// API location
app.use('/api', api);

// Send requested img
app.get('/uploads/img/:name', (req, res) => {
  let name = req.params.name;
  res.sendFile(path.join(__dirname, `uploads/img/${name}`));
});

// Send requested file
app.get('/uploads/doc/:name', (req, res) => {
  let name = req.params.name;
  res.sendFile(path.join(__dirname, `uploads/doc/${name}`));
});

// PassportJS login POST
app.post('/login', passport.authenticate('local', { successRedirect: '/admin', failureRedirect: '/login' }));

// Send to the Angular app
app.get('/admin', loggedIn, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// Send everything else to home page
app.get('*', (req, res) => {
  res.redirect('/');
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
