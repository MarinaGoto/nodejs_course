const path = require('path');

const express = require('express');

const app = express();

const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use(usersRoutes);

app.listen(3000);




