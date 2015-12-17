'use strict';

var shortid = require('shortid');
var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  name: String,
  _id: {
    type: String,
    unique: true,
    'default': shortid.generate
  },
  _creator : { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Room', roomSchema);
