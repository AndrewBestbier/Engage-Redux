//Module Imports
import {expect} from 'chai';
import request from 'supertest';

//Server Imports
var Room = require("../../../server/models/Room");
var User = require("../../../server/models/User");
var Message = require("../../../server/models/Message");
var server = require('../../../server');

describe('Rooms', () => {

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
      .end(function (err, res) {
        done();
    });
  });

  /*
    Name: Creating a Room
    Type: POST
    Url: /api/rooms/
   */
  it('should not be able to create a room if not authenticated', function(done) {
    request(server) /* Note the request(server) here, not registeredAgent */
      .post('/api/rooms')
      .send({name: 'Example Room'})
      .expect(500, done)
  });

  it('should be able to create a room if authenticated', function(done) {
    registeredAgent /* Note the registeredAgent here (Registered) */
      .post('/api/rooms')
      .send({name: 'Example Room'})
      .expect(200)
      .end(function(err, res) {
        expect(res.body.name).to.equal('Example Room');
        /* Populating the testRoomId to be found in subsequent tests */
        testRoomId = res.body._id;
        done();
      });
  });

  /*
    Name: Getting an individual Room
    Type: GET
    Url: /api/rooms/:id
   */
  it('should not find the room as it does not exist', function(done) {
    request(server)
      .get('/api/rooms/' + 'fake room id')
      .expect(500, done);
  });

  it('should find the room if it does exist', function(done) {
    request(server)
      .get('/api/rooms/' + testRoomId)
      .expect(200, done);
  });
});
