const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../../app');
const {
  destroyDb,
  connectTestDb,
  clearCollections,
} = require('../../../utils/dbHelpers');
const User = require('../../../models/User');
const Pet = require('../../../models/Pet');

describe('GET /api/pets', () => {
  before(async () => {
    // before starting the tests connect to a database
    await connectTestDb();
  });

  afterEach(async () => {
    // clear all collections after each test
    await clearCollections();
  });

  after(async () => {
    // after all tests are done, drop the database and disconnect to the database
    await destroyDb();
  });

  it('responds with pets that belong to a user', async () => {
    // insert fake user
    const { _id, username } = await User.create({ username: 'testUser' });

    const pets = [
      { name: 'Tom', type: 'cat', userId: _id },
      { name: 'Butch', type: 'dog', userId: _id },
      { name: 'Jerry', type: 'mouse', userId: _id },
    ];

    // insert fake pets
    await Pet.insertMany(pets);

    // perform the GET request
    const res = await supertest(app).get(`/api/pets?userId=${_id}`);
    const {
      body: { results },
    } = res;

    expect(results.length).to.equal(3);

    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      const pet = pets[i];

      expect(result.name).to.equal(pet.name);
      expect(result.type).to.equal(pet.type);
      expect(result.userId).to.equal(_id.toString());
    }
  });

  it('responds with an error without userId query param', async () => {
    const res = await supertest(app).get(`/api/pets`);

    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('Missing user_id parameter');
  });
});
