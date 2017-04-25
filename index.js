'use strict';

require('dotenv').config();
const express = require('express');
const chalk = require('chalk');

// listen on port set in env in deveopment or just port 80 if no env files exist
const port = process.env.PORT || 80;

const app = express();

// listen to get requests on any url
app.get('*', (req, res) => {

  let userAgent = req.get('User-Agent');
  let software = userAgent.substr(0,userAgent.indexOf(')')).slice(userAgent.indexOf('(')+1);

  let acceptLanguage = req.get('Accept-Language');
  let language = acceptLanguage.substr(0,acceptLanguage.indexOf(','));

  res.send({
    'ipaddress': req.ip,
    'language': language,
    'software': software
  });
});

app.listen(port, () => {
  console.log(chalk.yellow(`Listening on port: ${port}`));
});
