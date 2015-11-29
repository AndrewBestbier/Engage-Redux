'use strict';

var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  name: { type: String, unique: true },
  id: Number
});

module.exports = mongoose.model('Room', roomSchema);
