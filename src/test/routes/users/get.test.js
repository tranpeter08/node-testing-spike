const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../../app');
const { destroyDb, connectTestDb } = require('../../../utils/dbHelpers');
const User = require('../../../models/User');
const sinon = require('sinon');

describe('GET /api/users', () => {
  before(async () => {
    await connectTestDb();
  });

  after(async () => {
    await destroyDb();
  });

  it('sends a response with status 200 and a list of users', async () => {
    // insert our fake users
    const users = [
      { username: 'Buttercup' },
      { username: 'Dexter' },
      { username: 'Rigby' },
    ];

    await User.insertMany(users);

    // perform the GET request
    const res = await supertest(app).get('/api/users');

    expect(res.status).to.equal(200);
    expect(res.body.results.length).to.equal(3);
    expect(res.body.results[0].name).to.equal(users[0].name);
  });

  it('responds with status 500 on error', async () => {
    const stub = sinon.stub(User, 'find');
    stub.rejects({message: 'Mock Error'});

    const res = await supertest(app).get('/api/users');

    expect(res.status).to.equal(500);
    expect(res.body).to.have.property('error', 'Mock Error');
  })
});
