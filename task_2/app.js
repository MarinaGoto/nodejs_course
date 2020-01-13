const express = require('express');

const app = express();

// use allows to add middleware functions
app.use('/users', (req, res, next) => {
  res.send('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
  // next() allows the req to travel to the next middleware
  next();
});

app.use('/', (req, res) => {
  res.send('<h1>This has to send a dummy response</h1>');
});


app.listen(3000);
