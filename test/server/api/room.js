//Module Imports
import {expect} from 'chai';
import request from 'supertest';

//Server Imports
var Room = require("../../../server/models/Room");
var User = require("../../../server/models/User");
var Message = require("../../../server/models/Message");
var server = require('../../../server');

describe('Rooms', () => {

  before(() => {
    Room.collection.drop();
    Message.collection.drop();
    User.collection.drop();
  });

  it('should get no rooms because they have been deleted', function(done) {
    request(server)
      .get('/api/rooms')
      .expect(200)
      .end(function(err, res) {
        expect(res.body.length).to.equal(0);
        done();
      });
  });
});
