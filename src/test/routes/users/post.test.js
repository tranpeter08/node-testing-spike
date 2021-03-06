const {
  connectTestDb,
  destroyDb,
  clearCollections,
} = require('../../../utils/dbHelpers');
const supertest = require('supertest');
const { expect } = require('chai');
const app = require('../../../app');
const User = require('../../../models/User');

describe('POST /api/users/create', () => {
  before(async () => {
    await connectTestDb()
  });

  after(async () => {
    await destroyDb()
  });

  afterEach(async () => {
    await clearCollections()
  });

  it('responds with a user id on success', async () => {
    // I am using a simple User schema with just a username
    const resp = await supertest(app)
      .post('/api/users')
      .send({ username: 'Natasha' }); //  send a request body

    expect(resp.status).to.equal(201);
    expect(resp.body).to.have.property('id');
  });

  it('responds with an error when creating a duplicate username', async () => {
    const username = 'Lisa';
    await User.ensureIndexes(); 
    // ^ for some reason unique indexes were not working, this fixes that
    await User.create({username});

    const resp = await supertest(app)
      .post('/api/users')
      .send({username});

    expect(resp.status).to.equal(400);
  })
});
