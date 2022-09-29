'use strict';

const express = require('express');
const { AnimalsModel } = require('../models');

const router = express.Router();

router.post('/animals', async (req, res, send) => {
  console.log('req body', req.body);

  const newAnimal = await AnimalsModel.create(req.body);
  res.status(200).send(newAnimal);
});

module.exports = router;
