const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with a message', async () => {
    const res = await supertest(app).get('/');

    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('ok!');
  });
});
