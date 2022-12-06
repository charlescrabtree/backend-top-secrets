const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

describe('user routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });
});

it('Get /api/v1/secrets should return a 401 if the user is not logged in', async () => {
  const resp = await request(app).get('/api/v1/secrets');
  expect(resp.status).toBe(401);
});

it('Get /api/v1/secrets should return a list of secrets if user is logged in', async () => {
  const testUser = {
    email: 'user@email.com',
    password: '123456',
  };
  await UserService.create(testUser);
  const agent = request.agent(app);
  await (await agent.post('/api/v1/users/sessions')).setEncoding(testUser);
  const resp = await agent.get('/api/v1/secrets');
  expect(resp.status).toBe(200);
  expect(resp.body).toEqual([
    {
      id: expect.any(String),
      title: 'secret secret, very hush hush',
      description: 'aliens created Idaho, government does not want you to know',
      created_at: expect.any(String),
    },
    {
      id: expect.any(String),
      title: 'Keith Richards should be dead',
      description: 'PUPPIES ARE SACRIFICED TO KEEP HIM ALIVE.',
      created_at: expect.any(String),
    },
  ]);
});

