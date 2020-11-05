const { expect } = require('chai');
const supertest = require('supertest');
const nock = require('nock');
const app = require('../../../app');
const { TODOS_URL } = require('../../../config/urls');

describe('GET /api/3rd-party-api/todos', () => {
  const apiEndpoint = '/api/3rd-party-api/todos';

  it('responds with a list of 10 todos', async () => {
    // create the fake todo response
    const todos = new Array(10).fill('test');

    // set up nock to mock the 3rd-party api response
    nock(TODOS_URL).get('/todos').reply(200, todos);

    // perform GET request to our api
    const resp = await supertest(app).get(apiEndpoint);

    expect(resp.body.length).to.equal(10);
  });

  it('responds with error message on a failed request', async () => {
    // mock a failed response
    nock(TODOS_URL).get('/todos').reply(500);

    // perform the request to our api...
    const resp = await supertest(app).get(apiEndpoint);

    expect(resp.status).to.equal(500);
    expect(resp.body.message).to.equal('Request failed with status code 500');
  });
});
