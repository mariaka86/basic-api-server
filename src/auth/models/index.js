'use strict';

const { Sequelize, DataTypes } = require('sequelize');
// const animalsSchema = require('./animal.schema');
//'postgres://localhost:5432/database_development'

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';


// instantiates our database
const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  db: sequelize,
};
