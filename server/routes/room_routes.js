var Room = require('../models/Room');
var Message = require('../models/Message');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  /* Currently Unused
  router.get('/join_room', function(req, res) {
    console.log(req.user);
    res.json('Hello Andrewx');
  }); */

  /* Currently Unused
  router.get('/rooms', function(req, res) {
    Room.find({},{name: 1, id:1, _id:0}, function(err, data) {
      if(err) {
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  }); */

  // get a specific channel
  router.get('/rooms/:id', function(req, res) {

    Room.find({_id: req.params.id}, function(err, data) {
      if(err || data.length === 0) {
        return res.status(500).json({msg: 'Room not found'});
      }

      Message.find({roomId: req.params.id}, function(err, data) {
        if(err) {
          return res.status(500).json({msg: 'Room not found'});
        }
        res.json(data);
      });
    })
  })

  //Create a new Room
  router.post('/rooms/', function(req, res) {

    if(!req.user){
      return res.status(500).json({msg: 'User not logged in'});
    }

    var newRoom = new Room({
      name: req.body.name,
      _creator: req.user._id
    });

    newRoom.save(function (err, data) {
      if(err) {
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });
}
