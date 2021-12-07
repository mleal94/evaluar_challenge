const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PersonController, ChildController, UserController } = require('../modules');

const App = express();
App.use(cors());
App.use(morgan('dev'));
App.use(express.json());

// Database connection
const db = require('../models');

db.sequelize.sync().then(() => {
  console.log('The database is connected');
});

// API Routing
App.use(PersonController);
App.use(ChildController);
App.use(UserController);

module.exports = App;
