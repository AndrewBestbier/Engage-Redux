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



  /* Currently Unused */
  router.get('/load_auth_into_state', function(req, res) {

    if(!req.user){
      return res.status(500).json({msg: 'User not logged in'});
    }

    re.json(req.user);
  });

};
