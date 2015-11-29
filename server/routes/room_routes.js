var Room = require('../models/Room');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  router.get('/join_room', function(req, res) {
    res.json('Hello Andrew');
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

  //Create a new Room
  router.post('/rooms/new_room', function(req, res) {
    var newRoom = new Room(req.body);

    newRoom.save(function (err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });
}
