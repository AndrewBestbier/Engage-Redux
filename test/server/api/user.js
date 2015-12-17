//Module Imports
import {expect} from 'chai';
import request from 'supertest';

//Server Imports
var User = require("../../../server/models/User");
var server = require('../../../server');

describe('Authentication Api', () => {

  /*
    Name: Registration
    Type: POST
    Url: /api/register
   */
  describe('Registration', () => {

    before(() => {
      User.collection.drop();
    });


    it('should register the user if they do not exist', function(done) {
      request(server)
        .post('/api/register')
        .send({username: 'test@test.com', password: 'password'})
        .expect(200, done);
    });

    it('should throw an error if the username is already taken', function(done) {
      request(server)
        .post('/api/register')
        .send({username: 'test@test.com', password: 'password'})
        .expect(401, done);
    });

    it('should throw an error if all the parameters are not populated', function(done) {
      request(server)
        .post('/api/register')
        .send({password: 'password'})
        .expect(400);

      request(server)
        .post('/api/register')
        .send({username: 'test@test.com'})
        .expect(400, done);
    });
  });

  /*
    Name: Login
    Type: POST
    Url: /api/login
   */
   describe('Login', () => {

     before(() => {
       User.collection.drop();
     });

     it('should return an error if the user to log in does not exist', function(done) {
       request(server)
         .post('/api/login')
         .send({username: 'test@test.com', password: 'password'})
         .expect(401);

         /* Then we register this user for subsequent tests */
         request(server)
           .post('/api/register')
           .send({username: 'test@test.com', password: 'password'})
           .expect(200, done);
     });

     it('should return 200 if the user is logged in successfully', function(done) {
       request(server)
         .post('/api/login')
         .send({username: 'test@test.com', password: 'password'})
         .expect(200, done)
     })
   });

   /*
     Name: Logout
     Type: GET
     Url: /api/logout
    */

    describe('Logout', () => {
      it('should return 200 when the user logs out', function(done){
        request(server)
          .get('/api/logout')
          .expect(200, done);
      })
    })
});
