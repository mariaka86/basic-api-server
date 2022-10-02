'use strict';
require ('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const animalsModel = require('./animals/animal.js');
const foodModel = require ('./food/food.js');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';


// instantiates our database
const sequelize = new Sequelize(DATABASE_URL);
const FoodPrototype = foodModel(sequelize, DataTypes);
const AnimalsPrototype = animalsModel(sequelize, DataTypes);


sequelize.sync()
  .then(()=> console.log ('you are connected!'))
  .catch(err=> console.error(err));
  
module.exports = {
  sequelize,
  FoodPrototype,
  AnimalsPrototype,
};
