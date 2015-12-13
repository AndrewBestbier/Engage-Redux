var Room = require('../models/Room');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  router.get('/join_room', function(req, res) {
    console.log(req.user);
    res.json('Hello Andrewx');
  });

  //Get all the rooms in Engage
  router.get('/rooms', function(req, res) {
    Room.find({},{name: 1, id:1, _id:0}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });

  // get a specific channel
  router.get('/rooms/:id', function(req, res) {

    Room.find({_id: req.params.id}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data)
    })
  })

  //Create a new Room
  router.post('/rooms/new_room', function(req, res) {

    if(!req.user){
      return res.status(500).json({msg: 'User not logged in'});
    }

    var newRoom = new Room({
      name: req.body.name,
      _creator: req.user._id
    });

    newRoom.save(function (err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });
}
