//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import db from '../db/db';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Todos', () => {
/*
  * Test the /GET route
  */
  describe('/GET todo', () => {
      it('it should GET all the todos', (done) => {
        chai.request(server)
            .get('/api/v1/todos')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.todos.should.be.a('array');
              res.body.todos.length.should.be.eql(1);
              done();
            });
      });
  });

});