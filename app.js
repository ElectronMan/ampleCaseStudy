import express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import db from './db/db';
import router from './routes/index.js';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/db')
  .then(() => {
    console.log('mongodb started.');
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  }).catch(() => {
    console.log('Mongodb connection failed.');
  })


  module.exports = app