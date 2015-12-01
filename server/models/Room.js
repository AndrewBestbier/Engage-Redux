'use strict';

var shortid = require('shortid');
var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  name: { type: String, unique: true },
  _id: {
    type: String,
    unique: true,
    'default': shortid.generate
},
});

module.exports = mongoose.model('Room', roomSchema);
