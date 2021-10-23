/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const postsRoutes = require('./routes/posts.routes');
const { handleErrors } = require('./middlewares/handleErrors');

const app = express();

const db = require('./database/database');

dotenv.config({ path: 'variables.env' });

db.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch((error) => console.log(error));

app.use(express.json());

app.use('/posts', postsRoutes);

app.use(handleErrors);

module.exports = app;
