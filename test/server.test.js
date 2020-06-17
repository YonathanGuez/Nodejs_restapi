/**
 * End Point Test
 */
const app = require('../server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

/**
 * Check test Api Work
 */
it('Gets the test endpoint', async (done) => {
  // Sends GET Request to /test endpoint
  const res = await request.get('/');
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('pass!');
  expect(res.body.status).toBe('success');
  done();
});

/**
 * Post createuser
 */
it('POST Create  Request', async (done) => {
  // Sends POST Create  Request to /test endpoint
  const res = await request.post('/api/users/createuser').send({
    company: 'test',
    email: 'aaaa@hotmail.fr',
    last_payment: '',
    password: 'a',
    url: 'uuuu',
  });
  expect(res.status).toBe(201);
  expect(res.body.message).toBe('user created');
  expect(res.body.status).toBe('success');
  done();
});

/**
 * Post createuser Fail
 * if we want an other creation with same email
 */
it('POST Create user same mail : must fail', async (done) => {
  // Sends POST Create  Request to /test endpoint
  const res = await request.post('/api/users/createuser').send({
    company: 'test',
    email: 'aaaa@hotmail.fr',
    last_payment: '',
    password: 'a',
    url: 'uuuu',
  });
  expect(res.status).toBe(401);
  expect(res.body.message).toBe('user created');
  expect(res.body.status).toBe('fail');
  done();
});

/**
 * Post Login : success
 */
it('POST Login user', async (done) => {
  // Sends POST Create  Request to /test endpoint
  const res = await request.post('/api/users/login').send({
    email: 'aaaa@hotmail.fr',
    password: 'a',
  });
  expect(res.status).toBe(201);
  expect(res.body.company).toBe('test');
  expect(res.body.error).toBe('0');
  done();
});
/**
 * Post Login : fail bad password
 */
it('POST Login user bad password', async (done) => {
  // Sends POST Create  Request to /test endpoint
  const res = await request.post('/api/users/login').send({
    email: 'aaaa@hotmail.fr',
    password: 'b',
  });
  expect(res.status).toBe(401);
  expect(res.body.company).toBe('NULL');
  expect(res.body.error).toBe('1');
  done();
});

/**
 * Post Login : fail bad email
 */
it('POST Login user bad password', async (done) => {
  // Sends POST Create  Request to /test endpoint
  const res = await request.post('/api/users/login').send({
    email: 'addd@hotmail.fr',
    password: 'a',
  });
  expect(res.status).toBe(401);
  expect(res.body.company).toBe('NULL');
  expect(res.body.error).toBe('1');
  done();
});

/**
 * Post Delete : success
 */
it('POST Delete user', async (done) => {
  // Sends POST Create  Request to /test endpoint
  const res = await request.post('/api/users/deleteuser').send({
    email: 'aaaa@hotmail.fr',
  });
  expect(res.status).toBe(201);
  expect(res.body.message).toBe('user Delete');
  expect(res.body.status).toBe('success');
  done();
});
