'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  id: String,
  text: String,
  roomId : String
});

module.exports = mongoose.model('Message', messageSchema);
