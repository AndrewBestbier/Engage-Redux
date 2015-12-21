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

  /* The message that will be created later in this test */
  var testMessageId;

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

        //Getting the _id of this message so that in later tests we can vote on this message.
        testMessageId = res.body[0]._id;
        done();
      });
  });


  /*
    Name: Voting on a question
    Type: PUT
    Url: /api/messages/:id
   */
  it('should update the message in the database with the correct vote', function(done) {
    request(server)
      .put('/api/messages/')
      .send({messageId: testMessageId, vote: 1})
      .expect(200, done);
  });

  it('should throw an error if the vote is not equal to 1 or -1', function(done) {
    request(server)
      .put('/api/messages/')
      .send({messageId: 'a1', vote: 2})
      .expect(500, done)
  });

  it('should throw an error if the messageId is not defined', function(done) {
    request(server)
      .put('/api/messages/')
      .send({vote: 1})
      .expect(500, done);
  });
});
