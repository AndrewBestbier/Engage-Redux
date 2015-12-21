'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  text: String,
  roomId : String,
  vote: {type: Number, default: 0}
});

module.exports = mongoose.model('Message', messageSchema);
