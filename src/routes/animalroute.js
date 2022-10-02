'use strict';

const express = require('express');
const { Animal } = require('../models/index');
const router = express.Router();
//GET
router.get('/animal', getAnimal);

async function getAnimal(req, res, next) {
  try {
    let results = await Animal.find();
    res.status(200).send(results);

  } catch (error) {
    next(error);
  }
}
// POST
router.post('/animal', postAnimal);

async function postAnimal(req, res, next) {
  console.log(req.body);
  try {
    let results = await Animal.find();
    res.status(200).send(results);

  } catch (error) {
    next(error);
  }
}
//DELETE

router.delete('/animal/:animalId', deleteAnimal);

async function deleteAnimal(req, res, next) {
  const id = req.params.animalId;
  console.log(id);
  try {
    await Animal.findByIdAndDelete(id);
    res.status(204).send('successful!');
  } catch (error) {
    next(error);
  }
}
// UPDATE

router.put('/animal/:animalId', putAnimal);

async function putAnimal(req, res, next){
  let id = req.params.animalId;
  try {
    let data = req.body;

    const updateAnimal = await Animal.findByIdAndUpdate(id, data, { new: true, overwrite: true });
    res.status(201).send(updateAnimal);

  } catch (error) {
    next(error);

  }
}


module.exports = router;

