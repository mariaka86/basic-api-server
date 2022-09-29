'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const animalsSchema = require('./animal.schema');
//'postgres://localhost:5432/database_development'

const DATABASE_URL = process.env.DATABASE_URL;
// NODE_ENV === 'test'
//   ? 'sqlite:memory'
//   : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//syncs our database and creates tables
sequelizeDatabase.sync()
  .then(()=> console.log('you are connected'))
  .catch(err => console.error(err));

//create AnimalsModel with our Schema
const AnimalsModel = animalsSchema(sequelizeDatabase, DataTypes);



module.exports = {sequelizeDatabase, AnimalsModel};
