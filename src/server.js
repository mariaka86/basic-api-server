'use strict';

const express = require('express');
const animalsRouter = require('./routes/animals');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(animalsRouter);


function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = { app, start };
