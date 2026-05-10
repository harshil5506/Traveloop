import http from 'http';

const post = (path, data) => new Promise((resolve, reject) => {
  const body = JSON.stringify(data);
  const req = http.request({
    hostname: 'localhost',
    port: 5000,
    path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  }, res => {
    let resp = '';
    res.on('data', chunk => resp += chunk);
    res.on('end', () => resolve({ status: res.statusCode, body: resp }));
  });
  req.on('error', reject);
  req.write(body);
  req.end();
});

(async () => {
  try {
    const signup = await post('/api/auth/signup', {
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'TestPassword123'
    });
    console.log('SIGNUP', signup.status, signup.body);

    const login = await post('/api/auth/login', {
      email: 'testuser@example.com',
      password: 'TestPassword123'
    });
    console.log('LOGIN', login.status, login.body);
  } catch (error) {
    console.error('ERROR', error);
  }
})();
