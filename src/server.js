'use strict';

const express = require('express');
// const animalsRouter = require('./routes/animals');
// const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
// app.use(animalsRouter);


module.exports ={    //imported************************
  server: app,
  start: (port) => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
