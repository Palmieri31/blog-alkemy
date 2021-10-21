const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: 'variables.env' });

app.use(express.json());

module.exports = app;