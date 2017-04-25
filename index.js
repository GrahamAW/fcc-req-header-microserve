'use strict';

const express = require('express');
const chalk = require('chalk');

const app = express();

// listen to get requests on any url
app.get('*', (req, res) => {
  res.send('Hello...');
});

app.listen(3000);
