//Module Imports
import {expect} from 'chai';
import request from 'supertest';

//Server Imports
var Room = require("../../../server/models/Room");
var User = require("../../../server/models/User");
var Message = require("../../../server/models/Message");
var server = require('../../../server');

describe('Messages', () => {
  /* The authenticated user that will later be used */
  var registeredAgent = request.agent(server);

  /* The room that will be created later in this test */
  var testRoomId;

  before(function(done) {
    /* Clearing the database before these tests are run */
    Room.collection.drop();
    Message.collection.drop();
    User.collection.drop();

    /* Create an authenticated user for the routes in the API that require authentication */
    registeredAgent
      .post('/api/register')
      .send({username: 'test@test.com', password: 'password'})
      .end(function() {
        /* Nested Callback */
        registeredAgent
          .post('/api/rooms')
          .send({name: 'Example Room'})
          .end(function(err, res) {
            /* Populating the testRoomId to be found in subsequent tests */
            testRoomId = res.body._id;
            done();
          });
      });
  });

  /*
    Name: Creating a message
    Type: POST
    Url: /api/messages/
   */
  it('will create a new message in the database', function(done){

    registeredAgent
      .post('/api/messages')
      .send({text: 'Example Message', roomId: testRoomId})
      .end(function(err, res) {
        expect(res.body.text).to.equal('Example Message')
        done();
      });
  });

  /*
    Name: Getting a room's questions
    Type: GET
    Url: /api/rooms/:id
   */
  it('should find the newly added message in the room', function(done) {
    request(server)
      .get('/api/rooms/' + testRoomId)
      .end(function(err, res) {
        expect(res.body.length).to.equal(1);
        done();
      });
  });
});
