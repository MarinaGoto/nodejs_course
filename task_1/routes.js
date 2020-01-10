const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<h1>Hello there! Please write your Username here :)</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button>Create User</button></form>');
    return res.end();
  }
  if (url === '/create-user'  && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const username = parseBody.split('=')[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
  if (url === '/users') {
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
  }
};

module.exports = requestHandler;
