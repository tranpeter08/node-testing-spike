const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../app');

describe('GET /test', () => {
  it('responds with a message', async () => {
    const res = await supertest(app).get('/test');

    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('ok!');
  });
});
