var Message = require('../models/Message');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  //Posting a new message into the database
  router.post('/messages/', function(req, res) {
    var newMessage = new Message(req.body);

    newMessage.save(function (err, data) {
      if(err) {
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });

  router.put('/messages/', function(req, res) {
    //var newMessage = new Message(req.body);

    var messageId = req.body.messageId;
    var vote = req.body.vote;

    if(vote != 1 && vote != -1 || !messageId){
      return res.status(500).json({msg: 'internal server error'});
    }
    
    Message.update({_id: messageId}, {$inc : {vote: vote}}, {}, function(err, data) {
        if(err) {
          return res.status(500).json({msg: 'internal server error'});
        }
        res.json(data)
    })
  });
}
