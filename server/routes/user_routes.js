'user strict';

var bodyparser = require('body-parser');
var User = require('../models/User.js');
var Room = require('../models/Room.js');

module.exports = function loadUserRoutes(router, passport) {
  router.use(bodyparser.json());

  router.post('/register', passport.authenticate('local-register'), function(req, res) {
    res.json(req.user);
  });

  router.post('/login', passport.authenticate('local-login'), function(req, res) {
    Room
    .find({ _creator: req.user._id })
    .exec(function (err, rooms) {
      if (err) return handleError(err);
      res.json(rooms);
    })
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.send( { message: 'Successfully logged out' } );
  });

  //get auth credentials from server
  router.get('/load_auth_into_state', function(req, res) {

    if(!req.user){
      return res.status(500).json({msg: 'User not logged in'});
    }

    Room
    .find({ _creator: req.user._id })
    .exec(function (err, rooms) {
      if (err) return handleError(err);
      res.json(rooms);
    })
  });

  // get usernames for validating whether a username is available
  router.get('/allusers', function(req, res) {
    User.find({'local.username': { $exists: true } }, {'local.username': 1, _id:0}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  })

  // Check if username in DB
  router.post('/validate_username', function(req, res) {
    User.find({username: req.body.username}, function(err, data) {
      if (err) {
        console.log(err)
        return res.status(500).json({msg: 'error validating username'})
      }
      if (data.length > 0) {
        res.json({valid: false})
      } else {
        res.json({valid: true})
      }
    }).limit(1)
  })
};
